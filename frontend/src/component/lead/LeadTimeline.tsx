/* eslint-disable react-hooks/immutability */
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

interface LeadTrend {
  day: string;
  count: number;
}

interface Pipeline {
  label: string;
  value: number;
}

interface Activity {
  _id: string;
  user: string;
  action: string;
  lead: string;
  time: string;
}



interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
}

interface Dashboard {
  leadTrend: LeadTrend[];
  pipeline: Pipeline[];
  recentActivity: Activity[];
  recentLeads: Lead[];
}

const COLORS = [
  "bg-indigo-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-rose-500",
  "bg-sky-500",
];

const LeadTimeline = () => {
  const [dashboard, setDashboard] = useState<Dashboard>({
    leadTrend: [],
    pipeline: [],
    recentActivity: [],
    recentLeads: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:3000/api/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDashboard(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPipeline = useMemo(() => {
    return dashboard.pipeline.reduce((sum, item) => sum + item.value, 0);
  }, [dashboard.pipeline]);

  const maxLead = useMemo(() => {
    return (
      Math.max(
        ...dashboard.leadTrend.map((x) => x.count),
        10
      ) || 10
    );
  }, [dashboard.leadTrend]);

  if (loading) {
    return (
      <div className="bg-[#f8f9ff] p-8">
        <div className="animate-pulse space-y-5">
          <div className="h-60 rounded-2xl bg-white" />
          <div className="h-60 rounded-2xl bg-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9ff] p-6 space-y-6">

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Leads Trend */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-6">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="font-bold text-lg">
                Leads Over Time
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Incoming leads this week
              </p>

            </div>

            <button className="text-xs bg-indigo-50 text-indigo-700 px-3 py-2 rounded-xl font-semibold">
              Weekly
            </button>

          </div>

          <div className="mt-10">

            <div className="h-52 flex items-end justify-between gap-3">

                {dashboard.leadTrend.map((item, index) => (
  <div
    key={`${item.day}-${index}`}
    className="flex-1 flex flex-col items-center"
  >

                  <div className="relative w-full">

                    <div
                      style={{
                        height: `${(item.count / maxLead) * 180}px`,
                      }}
                      className="rounded-t-xl bg-gradient-to-t from-indigo-600 to-indigo-400 hover:opacity-90 transition-all"
                    />

                  </div>

                  <span className="mt-3 text-xs font-medium text-slate-500">
                    {item.day}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {item.count}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Pipeline */}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">

          <h2 className="font-bold text-lg">
            Pipeline
          </h2>

          <p className="text-xs text-slate-500">
            Current distribution
          </p>

          <div className="flex justify-center mt-8">

            <div className="relative h-40 w-40 rounded-full">

              <svg
                viewBox="0 0 36 36"
                className="w-full h-full -rotate-90"
              >

                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />

                {dashboard.pipeline.map((item, index) => {

                  const percentage =
                    (item.value / totalPipeline) * 100;

                  const offset =
                    dashboard.pipeline
                      .slice(0, index)
                      .reduce(
                        (sum, i) =>
                          sum +
                          (i.value / totalPipeline) * 100,
                        0
                      );

                  const colors = [
                    "#4F46E5",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#0EA5E9",
                  ];

                  return (
                    <circle
                      key={item.label}
                      cx="18"
                      cy="18"
                      r="15.915"
                      fill="none"
                      stroke={colors[index]}
                      strokeWidth="3"
                      strokeDasharray={`${percentage} ${100 - percentage}`}
                      strokeDashoffset={-offset}
                    />
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex flex-col justify-center items-center">

                <span className="text-3xl font-bold">

                  {totalPipeline}

                </span>

                <span className="text-xs text-slate-400">

                  Leads

                </span>

              </div>

            </div>

          </div>

          <div className="space-y-4 mt-8">

            {dashboard.pipeline.map((item, index) => (

              <div
                key={item.label}
                className="flex justify-between items-center"
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`w-3 h-3 rounded-full ${COLORS[index]}`}
                  />

                  <span className="text-sm">

                    {item.label}

                  </span>

                </div>

                <span className="font-bold">

                  {item.value}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Part 2 starts here */}
            {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Activity
              </h2>
              <p className="text-xs text-slate-500">
                Latest actions performed by your team.
              </p>
            </div>

            <button className="text-indigo-600 text-xs font-semibold hover:underline">
              View All
            </button>
          </div>

          {dashboard.recentActivity.length === 0 ? (
            <div className="flex items-center justify-center h-52 text-slate-400 text-sm">
              No recent activity found.
            </div>
          ) : (
            <div className="space-y-5">

              {dashboard.recentActivity.map((activity, index) => (

                <div
                  key={activity._id}
                  className="flex items-start gap-4"
                >

                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold ${COLORS[index % COLORS.length]}`}
                  >
                    {activity.user.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">

                    <p className="text-sm leading-relaxed text-slate-700">

                      <span className="font-bold text-slate-900">
                        {activity.user}
                      </span>{" "}

                      {activity.action}{" "}

                      <span className="font-semibold text-indigo-600">
                        {activity.lead}
                      </span>

                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {activity.time}
                    </p>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Recent Leads
              </h2>

              <p className="text-xs text-slate-500">
                Recently added customers.
              </p>

            </div>

            <button className="text-indigo-600 text-xs font-semibold hover:underline">
              Manage
            </button>

          </div>

          {dashboard.recentLeads.length === 0 ? (

            <div className="flex items-center justify-center h-52 text-slate-400 text-sm">
              No leads found.
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3 text-xs uppercase text-slate-400">
                      Company
                    </th>

                    <th className="text-left py-3 text-xs uppercase text-slate-400">
                      Name
                    </th>

                    <th className="text-center py-3 text-xs uppercase text-slate-400">
                      Email
                    </th>

                    <th className="text-right py-3 text-xs uppercase text-slate-400">
                      Status

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {dashboard.recentLeads.map((lead) => (

                    <tr
                      key={lead._id}
                      className="border-b last:border-none hover:bg-slate-50 transition"
                    >

                     <td className="py-4 font-semibold text-slate-900">
  {lead.company}
</td>

<td className="py-4">
  {lead.name}
</td>

<td className="py-4 text-slate-500">
  {lead.email}
</td>

<td className="py-4">
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
      lead.status
    )}`}
  >
    {lead.status}
  </span>
</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

function getStatusColor(status: string) {

  switch (status.toLowerCase()) {

    case "new":
      return "bg-slate-100 text-slate-700";

    case "contacted":
      return "bg-indigo-100 text-indigo-700";

    case "qualified":
      return "bg-emerald-100 text-emerald-700";

    case "proposal":
    case "proposal sent":
      return "bg-amber-100 text-amber-700";

    case "won":
      return "bg-green-100 text-green-700";

    case "lost":
      return "bg-rose-100 text-rose-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default LeadTimeline;