import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import item from "@/data/products";
import messages from "@/data/products";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Metrics",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Inventory",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};


function SellersDashboard() {
  const dummyLabels = ["Sales", "Stock"];
  const dummyData = [10, 15];
  return (
    <div className="lg:ml-64 md:ml-64 lg:px-5 flex flex-col items-center w-screen ">
      <h3 className=" m-auto lg:mr-auto font-bold mt-2">
        Good Morning, Douglas
      </h3>

      <div className="flex flex-col md:flex-row lg:flex-row mt-10  mb-10 lg:border-b-2 border-secondary">
        <div className="">
          <BarChart data={dummyData} labels={dummyLabels} />
        </div>
        <div className="border-l-2 border-b-2 border-secondary lg:ml-auto flex flex-col p-2 rounded-lg md:w-6/12 lg:w-6/12 ">
          <p className="mx-auto underline "> Messages</p>
          <div className="flex flex-col h-32 lg:h-auto overflow-y-scroll">
            {messages.map((message) => (
              <span key={message.id} className="border-b-2 pb-2">
                <span className=" flex font-bold">
                  <span>{message.name}</span>
                  <span className="ml-auto"> {message.id}</span>
                </span>
                <span>{message.messageContent}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col border-2 border-secondary rounded-xl">
        <p className="mx-auto">Recent Product Upload</p>
        <div>
          {item.map((item) => (
            <div key={item.id} className="p-2 border-b-2">
              <p className="font-bold">{item.itemName}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellersDashboard;
