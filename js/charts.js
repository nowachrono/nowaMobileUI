//Pie Chart
const dataPie = {
    labels: ["Data-1", "Data-2", "Data-3"],
    datasets: [
    {
    label: "Some Data",
    data: [300, 80, 100],
    backgroundColor: [
        "rgb(66, 135, 245)",
        "rgb(108, 160, 245)",
        "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
    },
    ],
};
                  
const configPie = {
    type: "pie",
    data: dataPie,
    options: {},
};
                  
var chartBar = new Chart(
    document.getElementById("chartPie"),
    configPie
);


//Bar Chart
const labelsBarChart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
];

const dataBarChart = {
    labels: labelsBarChart,
    datasets: [
        {
        label: "Some Data",
        backgroundColor: "hsl(217, 57%, 51%)",
        borderColor: "hsl(217, 57%, 51%)",
        data: [10, 20, 30, 100, 50, 30, 45],
        },
    ],
};

const configBarChart = {
    type: "bar",
    data: dataBarChart,
    options: {},
};

var chartBar = new Chart(
    document.getElementById("chartBar"),
    configBarChart
);


//Line Chart
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
    {
        label: "Some Data",
        backgroundColor: "hsl(217, 57%, 51%)",
        borderColor: "hsl(217, 57%, 51%)",
        data: [5, 150, 5, 200, 20, 30, 300],
    },
    ],
};
                  
const configLineChart = {
    type: "line",
    data,
    options: {},
};
                  
var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
);


//Web Chart
const dataRadar = {
    labels: [
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    ],
    datasets: [
    {
        label: "Some Data-1",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(133, 105, 241, 0.2)",
        borderColor: "rgb(133, 105, 241)",
        pointBackgroundColor: "rgb(133, 105, 241)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(133, 105, 241)",
    },
    {
        label: "Some Data-2",
        data: [44, 30, 50, 67, 96, 27, 115],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    ],
};
                  
const configRadarChart = {
    type: "radar",
    data: dataRadar,
    options: {},
};
                  
var chartBar = new Chart(
    document.getElementById("chartRadar"),
    configRadarChart
);
