"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE", "#FF5733", "#28B463"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    fillOpacity: 1,
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
  },
};

const initialData = {
  dengue: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  zika: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  tuberculosis: [5, 8, 6, 7, 4, 3, 9, 12, 10, 8, 7, 6],
  malaria: [12, 18, 22, 15, 25, 20, 30, 28, 33, 29, 27, 25],
};

const ChartOne: React.FC = () => {
  const [selectedDiseases, setSelectedDiseases] = useState<string[]>(["dengue", "zika"]);

  const handleCheckboxChange = (disease: string) => {
    setSelectedDiseases((prev) =>
      prev.includes(disease)
        ? prev.filter((d) => d !== disease)
        : [...prev, disease]
    );
  };

  const filteredSeries = selectedDiseases.map((disease) => {
    return {
      name: disease.charAt(0).toUpperCase() + disease.slice(1), // Formata o nome da doença
      data: initialData[disease as keyof typeof initialData],
    };
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 w-full">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          {["dengue", "zika", "turbeculose", "malaria"].map((disease) => (
            <label key={disease} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedDiseases.includes(disease)}
                onChange={() => handleCheckboxChange(disease)}
              />
              <span className="capitalize">{disease}</span>
            </label>
          ))}
        </div>
      </div>

      <div id="chartOne" className="-ml-5 mt-4">
        <ReactApexChart
          options={options}
          series={filteredSeries}
          type="area"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ChartOne;
