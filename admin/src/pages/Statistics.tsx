import React, { useEffect, useState } from 'react';
import { FaListAlt, FaCheckDouble, FaTasks } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartOptions } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// TypeScript interface for stats
interface Stats {
  total: number;
  accepted: number;
  done: number;
}

// Props for individual chart boxes
interface ChartBoxProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  description: string;
  percentage: string;
}

// Component for each chart box
const ChartBox: React.FC<ChartBoxProps> = ({ label, value, icon, description, percentage }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow flex flex-col items-center gap-3 w-64">
    <div className="flex justify-between w-full text-lg font-semibold">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="text-4xl">{icon}</div>
    <p className="text-sm">{description}</p>
    <p className="font-bold text-green-500">{percentage}</p>
  </div>
);

const Statistics: React.FC = () => {
  const [stats, setStats] = useState<Stats>({ total: 0, accepted: 0, done: 0 });

  const fetchStatistics = async () => {
    try {
      const response = await fetch('https://ijisho-backend.onrender.com/api/reports/statistics');
      const data = await response.json();
      setStats({
        total: data.totalReports || 0,
        accepted: data.acceptedReports || 0,
        done: data.doneReports || 0,
      });
    } catch (err) {
      console.error('Failed to fetch statistics:', err);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const getPercentage = (value: number) =>
    stats.total > 0 ? `${((value / stats.total) * 100).toFixed(1)}%` : '0%';

  const statItems: ChartBoxProps[] = [
    {
      label: 'Total Reports',
      value: stats.total,
      icon: <FaListAlt color="#2196F3" />,
      description: 'All submitted reports',
      percentage: '100%',
    },
    {
      label: 'Accepted',
      value: stats.accepted,
      icon: <FaTasks color="#00BCD4" />,
      description: 'Being handled by staff',
      percentage: getPercentage(stats.accepted),
    },
    {
      label: 'Done',
      value: stats.done,
      icon: <FaCheckDouble color="#4CAF50" />,
      description: 'Resolved reports',
      percentage: getPercentage(stats.done),
    },
  ];

  // Chart data
  const barChartData = {
    labels: ['Total', 'Accepted', 'Done'],
    datasets: [
      {
        label: 'Report Count',
        data: [stats.total, stats.accepted, stats.done],
        backgroundColor: ['#2296F3', '#00BCD4', '#4CAF50'],
        borderColor: ['#0D47A1', '#006064', '#1B5E20'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart' as const,
    },
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Reports Overview (Bar Chart)' },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Statistics Overview</h1>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {statItems.map((item, idx) => (
          <ChartBox key={idx} {...item} />
        ))}
      </div>

      <div className="w-full h-96">
        <Bar data={barChartData} options={barChartOptions} height={400} />
      </div>
    </div>
  );
};

export default Statistics;
