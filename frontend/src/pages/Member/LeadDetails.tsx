/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  Mail, 
  Phone, 
  Building2, 
  UserCheck, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  FileText, 

} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  notes?: string;
  assignedTo?: {
    _id: string;
    name: string;
    email: string;
  } | null;
  createdAt: string;
}

const LeadDetails = () => {
  const { id } = useParams();

  const [lead, setLead] = useState<Lead | null>(null);

  const [status, setStatus] = useState("");

  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(true);
  

  const [savingStatus, setSavingStatus] = useState(false);

  const [savingNotes, setSavingNotes] = useState(false);

  useEffect(() => {
    fetchLead();
  }, []);

  const fetchLead = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `https://leadflow-s0bj.onrender.com/api/leads/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLead(data.data);

      setStatus(data.data.status);

      setNotes(data.data.notes || "");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async () => {
    try {
      setSavingStatus(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `https://leadflow-s0bj.onrender.com/api/leads/${id}/status`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Status Updated");

      fetchLead();
    } catch (error) {
      console.log(error);
    } finally {
      setSavingStatus(false);
    }
  };

  const saveNotes = async () => {
    try {
      setSavingNotes(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `https://leadflow-s0bj.onrender.com/api/leads/${id}/notes`,
        {
          notes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Notes Saved");

      fetchLead();
    } catch (error) {
      console.log(error);
    } finally {
      setSavingNotes(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="flex items-center justify-center h-screen">
        Lead not found
      </div>
    );
  }

  return (


    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Breadcrumb & Actions */}
        <div>
         

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
             
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Lead Details</h1>
              <p className="text-xs text-slate-500">Manage your assigned lead and track interaction progress.</p>
            </div>

            
          </div>
        </div>

        {/* Lead Profile Header Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-md">
                  {lead?.name ? lead.name.charAt(0) : "L"}
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">{lead?.name || "Customer Name"}</h2>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {status || lead?.status || "Qualified"}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Lead Contact at <span className="font-semibold text-slate-700">{lead?.company || "Company"}</span>
                </p>
              </div>
            </div>

            
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (2 Cols wide on Desktop) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Lead Information */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3">Lead Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Email Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-400 font-medium">Email Address</p>
                    <p className="text-xs font-semibold text-slate-800 truncate mt-0.5">{lead?.email || "N/A"}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Phone Number</p>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">{lead?.phone || "N/A"}</p>
                  </div>
                </div>

                {/* Company Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Company</p>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">{lead?.company || "N/A"}</p>
                  </div>
                </div>

                {/* Assigned To Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Assigned To</p>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      {lead?.assignedTo ? lead.assignedTo.name : "Unassigned"}
                    </p>
                  </div>
                </div>

                {/* Industry Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Industry</p>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">Enterprise SaaS</p>
                  </div>
                </div>

                {/* Created Date Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Created Date</p>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      {lead?.createdAt ? new Date(lead.createdAt).toLocaleString() : "N/A"}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Lead Stage / Update Status Block */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-800">Lead Stage</h3>
              </div>
              
              <label className="text-xs text-slate-500 font-medium block mb-2">Change Pipeline Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-3 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all mb-4"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>

              <button
                onClick={updateStatus}
                disabled={savingStatus}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-3 rounded-xl shadow-sm transition-colors disabled:opacity-50"
              >
                {savingStatus ? "Updating..." : "Update Status"}
              </button>
            </div>

          </div>

          {/* Right Column (Notes & Activity Timeline) */}
          <div className="space-y-6">
            
            {/* Internal Notes Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-800">Internal Notes</h3>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">SAVED 5M AGO</span>
              </div>

              <textarea
                rows={6}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Jot down notes from the latest call or discovery session..."
                className="w-full border border-slate-200 rounded-xl p-3.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none transition-all mb-4"
              />

              <button
                onClick={saveNotes}
                disabled={savingNotes}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <FileText className="w-4 h-4" />
                {savingNotes ? "Saving..." : "Save Notes"}
              </button>
            </div>

            {/* Activity Timeline Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800">Activity Timeline</h3>
                <button className="text-xs font-semibold text-indigo-600 hover:underline">View Log</button>
              </div>

              <div className="space-y-4 text-xs relative pl-4 border-l-2 border-slate-100 ml-2">
                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-4 ring-white"></span>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-slate-800">Discovery Call Completed</p>
                    <span className="text-[10px] text-slate-400">2h ago</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px]">Discussed Q3 migration strategy and seat requirements.</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></span>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-slate-800">Email Received</p>
                    <span className="text-[10px] text-slate-400">Yesterday</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 italic text-[11px]">"Looking forward to the proposal. Eager to get started."</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-slate-800">Note Added</p>
                    <span className="text-[10px] text-slate-400">2 days ago</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px]">Verified decision maker role and budget authority.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LeadDetails;