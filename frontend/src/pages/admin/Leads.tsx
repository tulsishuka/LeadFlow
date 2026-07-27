/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";
import axios from "axios";
import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  assignedTo?: {
    _id: string;
    name: string;
  } | null;
  createdAt: string;
}

interface Member {
  _id: string;
  name: string;
  email: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [showFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLead, setSelectedLead] = useState<string | null>(null);

  const [columns] = useState({
    email: true,
    company: true,
    assigned: true,
    created: true,
  });

  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0,
  });

  useEffect(() => {
    fetchLeads(1);
    fetchMembers();
  }, []);

  const fetchLeads = async (page: number) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `https://leadflow-s0bj.onrender.com/api/leads?page=${page}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeads(data.leads);

      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        total: data.total,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

 const fetchMembers = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "https://leadflow-s0bj.onrender.com/api/users/members",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Members API:", response.data);

    // Try different possible response shapes
    const membersData =
      response.data.members ||
      response.data.data ||
      response.data.users ||
      [];

    setMembers(Array.isArray(membersData) ? membersData : []);

  } catch (error) {
    console.error(error);
    setMembers([]);
  }
};

  const assignLead = async (
    leadId: string,
    userId: string
  ) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `https://leadflow-s0bj.onrender.com/api/leads/${leadId}/assign`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchLeads(pagination.page);
      setSelectedLead(null);
    } catch (error) {
      console.log(error);
    }
  };

 ;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";

      case "Contacted":
        return "bg-yellow-100 text-yellow-700";

      case "Qualified":
        return "bg-indigo-100 text-indigo-700";

      case "Won":
        return "bg-green-100 text-green-700";

      case "Lost":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const searchMatch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase());

    const statusMatch = selectedStatus
      ? lead.status === selectedStatus
      : true;

    return searchMatch && statusMatch;
  });

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (

<div className="min-h-screen bg-[#F2EFFF] p-6 font-sans">
  <div className="max-w-7xl mx-auto space-y-6">


    {/* Search Bar */}
    <div className="mb-4">
      <div className="bg-white border border-slate-200/80 rounded-xl flex items-center px-3.5 shadow-2xs focus-within:border-indigo-500 transition">
        <Search size={16} className="text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search leads..."
          className="w-full p-2.5 text-xs text-slate-700 outline-none bg-transparent placeholder:text-slate-400"
        />
      </div>
    </div>

    {/* Filter Dropdown */}
    {showFilter && (
      <div className="bg-white border border-slate-200 rounded-xl p-3 mb-4 shadow-sm">
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border border-slate-200 rounded-lg p-2 text-xs font-medium text-slate-700 outline-none bg-white"
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>
      </div>
    )}

    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0F0069] border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-left">
              <th className="px-6 py-3.5">Customer</th>
              {columns.email && <th className="px-6 py-3.5">Email</th>}
              {columns.company && <th className="px-6 py-3.5">Company</th>}
              <th className="px-6 py-3.5">Status</th>
              {columns.assigned && <th className="px-6 py-3.5">Assigned To</th>}
              {columns.created && <th className="px-6 py-3.5">Created</th>}
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-slate-400 font-medium">
                  No Leads Found
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead._id} className="hover:bg-slate-50/60 transition-colors">
                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#F2EFFF] border border-slate-200 flex items-center justify-center font-bold text-slate-600 shrink-0">
                        {lead.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-500 leading-snug">{lead.name}</h3>
                      </div>
                    </div>
                  </td>

                  {columns.email && (
                    <td className="px-6 py-4 text-slate-500 font-normal">{lead.email}</td>
                  )}

                  {columns.company && (
                    <td className="px-6 py-4 font-semibold text-slate-800">{lead.company}</td>
                  )}

                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-medium ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  {columns.assigned && (
                    <td className="px-6 py-4">
                      {lead.assignedTo ? (
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center text-[10px] font-bold">
                            {lead.assignedTo.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                          </span>
                          <span className="font-medium text-slate-700">{lead.assignedTo.name}</span>
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Unassigned</span>
                      )}
                    </td>
                  )}

                  {columns.created && (
                    <td className="px-6 py-4 text-slate-400 font-medium">
                      {new Date(lead.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </td>
                  )}

                  {/* Actions Dropdown */}
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => setSelectedLead(selectedLead === lead._id ? null : lead._id)}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {selectedLead === lead._id && (
                      <div className="absolute right-6 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-lg z-20 p-3 text-left">
                        <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase">
                          Assign Lead To
                        </p>
                        <select
                          defaultValue=""
                          onChange={(e) => assignLead(lead._id, e.target.value)}
                          className="w-full border border-slate-200 rounded-lg p-2 text-xs text-slate-700 bg-white focus:outline-none"
                        >
                          <option value="">Select Member</option>
                          {members.map((member) => (
                            <option key={member._id} value={member._id}>
                              {member.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center bg-[#0F0069]  border-t border-slate-100 px-6 py-3.5 text-xs text-slate-500">
        <p className="font-medium">
          Showing <span className="font-bold text-slate-700">{pagination.page * 10 - 9}-{Math.min(pagination.page * 10, pagination.total)}</span> of <span className="font-bold text-slate-700">{pagination.total}</span> leads
        </p>

        <div className="flex items-center gap-1.5">
          <button
            disabled={pagination.page === 1}
            onClick={() => fetchLeads(pagination.page - 1)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/60 disabled:opacity-30 disabled:hover:bg-transparent transition"
          >
            <ChevronLeft size={16} />
          </button>

          <button className="w-7 h-7   text-white rounded-lg font-semibold flex items-center justify-center text-xs">
            {pagination.page}
          </button>

          <button
            disabled={pagination.page === pagination.totalPages}
            onClick={() => fetchLeads(pagination.page + 1)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/60 disabled:opacity-30 disabled:hover:bg-transparent transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
  );
};

export default Leads;