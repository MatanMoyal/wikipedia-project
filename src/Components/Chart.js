import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const dataGraph = (rows) => {
  return {
    backgroundColor: "rgba(75,192,192,1)",
    labels: rows.labels,
    datasets: [
      {
        label: "Disaster Views",
        data: rows.data,
        fill: true,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderColor: "rgba(255,204,153,0.8)"
      },
    ],
  }
};

export const Chart = ({ rows }) => {
  return (
    <div className="graph-container" >
      <Line data={dataGraph(rows)} width={350} height={150} options={{
        plugins: {  
          legend: {
            labels: {
              color: "white",  
              font: {
                size: 14 
              }
            }
          }
        },
        scales: {
          yAxes: {
            ticks: {
              beginAtZero: true,
              color: 'white',
              fontSize: 12,
            }
          },
          xAxes: {
            ticks: {
              beginAtZero: true,
              color: 'white',
              fontSize: 10,
            }
          },
        }
      }
      }></Line>
    </div>
  )
}