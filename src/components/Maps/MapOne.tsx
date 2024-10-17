"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import React, { useEffect } from "react";
import "/public/map/brasil.js";

interface MapOneProps {
  onRegionClick: (region: string) => void;
}

const MapOne: React.FC<MapOneProps> = ({ onRegionClick }) => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "brasil",
      zoomButtons: true,
      selectedRegions: ["BR-TO"], // Destaque inicial para Tocantins
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
        selected: {
          fill: "#3056D3", // Cor quando a região está selecionada
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
      onRegionClick: (event: any, code: string) => {
        const selectedRegions = mapOne.getSelectedRegions(); // Obtém as regiões selecionadas atualmente

        if (code === "BR-TO") {
          // Se Tocantins for clicado novamente, mantém a seleção
          mapOne.clearSelectedRegions();
          mapOne.setSelectedRegions(["BR-TO"]);
        } else {
          // Desmarca Tocantins se outro estado for selecionado
          mapOne.clearSelectedRegions(); // Limpa as regiões selecionadas
          mapOne.setSelectedRegions([code]); // Define a nova seleção
        }

        onRegionClick(code); // Passa o código da região selecionada para o componente pai
      },
    });

    return () => {
      const map = document.getElementById("mapOne");
      if (map) {
        map.innerHTML = "";
      }
    };
  }, [onRegionClick]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Regiões
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
