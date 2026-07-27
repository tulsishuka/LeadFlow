/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

const MemberLead = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyLeads();
  }, []);

  const fetchMyLeads = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:3000/api/leads/my-leads",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeads(data.leads);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (

<div className="p-6 bg-slate-50 min-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.length === 0 ? (
          <div className="col-span-full bg-white rounded-2xl p-10 text-center text-gray-500 shadow-sm border border-gray-100">
            No Leads Assigned
          </div>
        ) : (
          leads.map((lead) => (
            <div
              key={lead._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                

             
                <div className="space-y-1.5 text-xs text-gray-500 border-b border-gray-100 pb-4 mb-4">
                  {lead.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                  )}
                  {lead.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      <span>{lead.phone}</span>
                    </div>
                  )}
                </div>

                {/* Pipeline Status Mockup Section */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Pipeline Status
                  </span>
                  <div className="flex gap-1.5 mb-1.5">
                    <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-indigo-200 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
                  </div>
                
                </div>

                {/* Update info / Meta */}
                <div className="flex justify-between items-center text-[11px] text-gray-400 mb-5">
                  <span>Updated 2h ago</span>
                  <span>
                    Next: <strong className="text-gray-600 font-medium">Follow up</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
             
                
                <button
  onClick={() => navigate(`/member/leads/${lead._id}`)}
  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs py-2.5 px-4 rounded-xl transition-colors text-center"
>
  Open Lead
</button>
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MemberLead;