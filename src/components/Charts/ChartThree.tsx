import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeProps {
  selectedRegion: string;
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  labels: ["Dengue", "Zika", "Tuberculose", "Malária"],
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false, // Desativa as porcentagens dentro do gráfico
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC<ChartThreeProps> = ({ selectedRegion }) => {
  const [series, setSeries] = useState([65, 34, 12, 56]);

  useEffect(() => {
    if (selectedRegion === "BR-TO") {
      setSeries([65, 34, 12, 56]); // Dados fictícios para Tocantins
    } else if (selectedRegion === "BR-PA") {
      setSeries([45, 30, 20, 40]); // Dados fictícios para Pará
    } else {
      setSeries([65, 34, 12, 56]); // Outros estados ou padrão
    }
  }, [selectedRegion]);

  const total = series.reduce((acc, value) => acc + value, 0);
  const percentages = series.map((value) => ((value / total) * 100).toFixed(1) + "%");

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Tipos de Doença
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="flex justify-around mt-4">
        {options.labels?.map((label, index) => (
          <div key={index} className="text-center">
            <span className="block text-sm font-semibold">{label}</span>
            <span className="text-lg font-bold">{percentages[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;

