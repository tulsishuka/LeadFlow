/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";

interface Activity {
  _id: string;
  type: string;
  message: string;
  createdAt: string;

  user?: {
    name: string;
    email: string;
    role: string;
  };

  lead?: {
    name: string;
    email: string;
    company: string;
  };
}

const Activity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:3000/api/activities",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setActivities(data.activities);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFFF] p-4 sm:p-6 lg:p-8 text-slate-800">
      <div className="max-w-5xl mx-auto">
       
        <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Global Activity Timeline
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Real-time tracking of all lead interactions across your workspace.
            </p>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-24">
          <div className="absolute left-0 top-0">
            <span className="rounded-full bg-[#0F0069] px-3 py-1 text-xs font-bold text-white shadow-xs">
              Today
            </span>
          </div>

          <div className="absolute left-[24px] top-8 bottom-0 w-[2px] bg-indigo-100 sm:left-[88px]" />

          <div className="space-y-6 pt-8">
            {activities
              .filter((activity) => activity.type === "note")
              .map((activity) => (
                <div
                  key={activity._id}
                  className="relative flex items-start gap-6"
                >
                  <div className="absolute -left-24 top-5 hidden w-16 text-right text-[11px] font-semibold text-[#0F0069] sm:block">
                    {new Date(activity.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>

                  <div className="absolute left-10 -top-5 text-[11px] font-semibold text-[#0F0069] sm:hidden">
                    {new Date(activity.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>

                  <div className="absolute left-[18px] top-6 z-10 h-3 w-3 rounded-full border-2 border-[#0F0069] bg-[#0F0069] shadow-xs sm:-left-[11px]" />
                  <div className="ml-8 flex-1 rounded-2xl border border-slate-200/80 bg-[#F2EFFF] p-5 shadow-xs transition-all duration-200 hover:shadow-md sm:ml-0">
        
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-[#E2DFFF] text-sm font-bold text-slate-700">
                        {activity.user?.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Interaction Note
                        </h3>

                        <p className="text-xs text-slate-500">
                          Added by{" "}
                          <span className="font-semibold text-[#0F0069]">
                            {activity.user?.name}
                          </span>{" "}
                          ({activity.user?.role})
                        </p>
                      </div>
                    </div>

                    <div className="my-3 rounded-xl border-l-4 border-[#0F0069] bg-slate-50/80 p-4 text-sm italic leading-relaxed text-slate-700">
                      "{activity.message}"
                    </div>
                    {activity.lead && (
                      <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:gap-4">
                        <div>
                          Lead:{" "}
                          <span className="font-bold text-[#0F0069]">
                            {activity.lead.name}
                          </span>
                        </div>

                        {activity.lead.company && (
                          <div>
                            Company:{" "}
                            <span className="font-bold text-[#0F0069]">
                              {activity.lead.company}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;