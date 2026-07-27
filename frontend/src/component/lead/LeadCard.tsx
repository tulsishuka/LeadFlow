/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";
import axios from "axios";

const LeadCard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    conversionRate: 0,
    monthlyGrowth: 0,
    qualifiedLeads: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

    
const { data } = await axios.get(
  // "http://localhost:3000/api/dashboard/stats",
   "https://leadflow-s0bj.onrender.com/api/dashboard/stats",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

console.log("Dashboard Response:", data);

setStats(data.data);
      setStats(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "TOTAL LEADS",
      value: stats.totalLeads.toLocaleString(),
      badgeText: "↑12%",
      badgeColor: "text-emerald-500",
      accentColor: "bg-indigo-600",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },

    {
      title: "CONVERSION RATE",
      value: `${stats.conversionRate}%`,
      badgeText: "+2.4% vs LY",
      badgeColor: "text-slate-500",
      accentColor: "bg-emerald-600",
      iconBg: "bg-emerald-300",
      iconColor: "text-emerald-900",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },

    {
      title: "MONTHLY GROWTH",
      value: `${stats.monthlyGrowth}%`,
      badgeText: "↑4%",
      badgeColor: "text-emerald-500",
      accentColor: "bg-amber-700",
      iconBg: "bg-amber-800",
      iconColor: "text-amber-100",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },

    {
      title: "QUALIFIED LEADS",
      value: stats.qualifiedLeads,
      badgeText: "Goal: 400",
      badgeColor: "text-slate-500",
      accentColor: "bg-slate-400",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.101c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F2EFFF] p-6 sm:p-8">

      <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
  <div>
    <h1 className="text-2xl font-extrabold text-slate-900">
      Dashboard Overview
    </h1>

    <p className="text-sm text-slate-500">
      Real-time health of your lead pipeline.
    </p>
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500 uppercase">
                {card.title}
              </span>

              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
              >
                {card.icon}
              </div>
            </div>

            <div className="my-4 flex justify-between items-end">
              <h2 className="text-3xl font-bold text-slate-900">
                {card.value}
              </h2>

              <span className={`text-xs ${card.badgeColor}`}>
                {card.badgeText}
              </span>
            </div>

            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full w-1/3 rounded-full ${card.accentColor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default LeadCard;