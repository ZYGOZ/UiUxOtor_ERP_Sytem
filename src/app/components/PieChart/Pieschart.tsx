import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

interface Props {
  data: number[];
}

const PieChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: ['Pending', 'Approved', 'Rejected'],
    datasets: [
      {
        data,
        backgroundColor: [
          'rgb(242, 148, 37)',
          'rgb(16, 162, 66)',
          'rgb(230, 79, 83)',
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
