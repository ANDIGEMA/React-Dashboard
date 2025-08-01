import React from "react";
import Chart from "react-apexcharts";

const Analytics = () => {
  const options = {
    chart: { type: "bar", height: 350 }, // Change type here for other chart types
    title: { text: "Monthly Sales" }, // Title on top
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "April"] }, // Bottom labels
    stroke: { curve: "smooth" },  // Smooth or straight lines
    dataLabels: { enabled: false },  // Show/hide values on bars or lines
    grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },  // Background rows
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 58], // Values to show on the Y-axis
      
    },
  ];

  // For Column Chart
   const columnOptions = {
  ...options,
  plotOptions: {
    bar: {
      horizontal: false, // vertical bars = column chart
    },
  },
};

// BoxPlot cHart
const boxPlotOptions = {
  chart: {
    type: "boxPlot",
    height: 350,
  },
  title: {
    text: "BoxPlot Example",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar"],
  },
};

const boxPlotSeries = [
  {
    type: "boxPlot",
    data: [
      {
        x: "Jan",
        y: [54, 66, 69, 75, 88], // [min, Q1, median, Q3, max]
      },
      {
        x: "Feb",
        y: [43, 65, 69, 76, 81],
      },
      {
        x: "Mar",
        y: [31, 39, 45, 51, 59],
      },
    ],
  },
];
  return(
    <div className=" ">
      <Chart options={options} series={series} type="area" height={350} />
      <Chart options={options} series={series} type="line" height={350} />
      <Chart options={columnOptions} series={series} type="bar" height={350} />
     <Chart options={boxPlotOptions} series={boxPlotSeries} type="boxPlot" height={350}/>
   
    </div>
  ) 
}
export default Analytics;
