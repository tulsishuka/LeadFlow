import { useEffect, useState } from "react";
import axios from "axios";


interface Activity {

_id:string;

type:string;

message:string;

createdAt:string;

user?:{
 name:string;
 email:string;
 role:string;
};

lead?:{
 name:string;
 email:string;
 company:string;
};

}



const Activity = ()=>{


const [activities,setActivities]=useState<Activity[]>([]);



useEffect(()=>{

fetchActivities();

},[]);



const fetchActivities=async()=>{

try{


const token=localStorage.getItem("token");


const {data}=await axios.get(

"http://localhost:3000/api/activities",

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



setActivities(data.activities);



}catch(error){

console.log(error);

}

};




return (




<div className="min-h-screen bg-[#F8FAFC] p-8 text-slate-800">
  <div className="max-w-5xl mx-auto">

    {/* Header */}
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Global Activity Timeline
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Real-time tracking of all lead interactions across your workspace.
        </p>
      </div>

      
    </div>

    {/* Timeline Wrapper */}
    <div className="relative pl-24">
      {/* Date Pill Marker */}
      <div className="absolute left-0 top-0">
        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs">
          Today
        </span>
      </div>

      {/* Vertical Timeline Bar */}
      <div className="absolute left-[88px] top-8 bottom-0 w-[2px] bg-indigo-100" />

      {/* Activity List */}
      <div className="space-y-6 pt-8">
        {activities
          .filter((activity) => activity.type === "note")
          .map((activity) => (
            <div key={activity._id} className="relative flex items-start gap-6">

              {/* Timestamp on Left side of line */}
              <div className="absolute -left-24 top-5 w-16 text-right text-[11px] font-semibold text-slate-400">
                {new Date(activity.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>

              {/* Node Dot on the timeline */}
              <div className="absolute -left-[11px] top-6 w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-xs z-10" />

              {/* Card Container */}
              <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-200">
                
                {/* User Info Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    {activity.user?.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">
                        Interaction Note
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500">
                      Added by <span className="font-semibold text-slate-700">{activity.user?.name}</span> ({activity.user?.role})
                    </p>
                  </div>
                </div>

                {/* Message Callout Box (Matches Note Design in Image) */}
                <div className="my-3 p-4 rounded-xl bg-slate-50/80 border-l-4 border-amber-500 text-slate-700 text-sm italic leading-relaxed">
                  "{activity.message}"
                </div>

                {/* Lead Details Footer */}
                {activity.lead && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                    <div>
                      Lead: <span className="font-bold text-slate-800">{activity.lead?.name}</span>
                    </div>
                    {activity.lead?.company && (
                      <div>
                        Company: <span className="font-bold text-slate-800">{activity.lead?.company}</span>
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
)

}


export default Activity;