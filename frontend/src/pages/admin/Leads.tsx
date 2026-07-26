/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";

import {
  Filter,
  Download,
  Columns,
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
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLead, setSelectedLead] = useState<string | null>(null);

  const [columns, setColumns] = useState({
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
        `http://localhost:3000/api/leads?page=${page}&limit=10`,
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
      "http://localhost:3000/api/users/members",
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
        `http://localhost:3000/api/leads/${leadId}/assign`,
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

  const exportLeads = () => {
    const csv = Papa.unparse(leads);

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "leads.csv";
    link.click();
  };

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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Leads
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              <span className="font-semibold">
                {pagination.total}
              </span>{" "}
              Total Leads
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => setShowFilter(!showFilter)}
              className="border rounded-xl px-4 py-2 flex items-center gap-2 bg-white"
            >
              <Filter size={18} />
              Filter
            </button>

            <button
              onClick={exportLeads}
              className="border rounded-xl px-4 py-2 flex items-center gap-2 bg-white"
            >
              <Download size={18} />
              Export
            </button>

            <button
              onClick={() =>
                setColumns({
                  email: !columns.email,
                  company: !columns.company,
                  assigned: !columns.assigned,
                  created: !columns.created,
                })
              }
              className="border rounded-xl px-4 py-2 flex items-center gap-2 bg-white"
            >
              <Columns size={18} />
              Columns
            </button>

          </div>

        </div>

        {/* Search */}

        <div className="mb-5">

          <div className="bg-white border rounded-xl flex items-center px-4">

            <Search size={18} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads..."
              className="w-full p-3 outline-none"
            />

          </div>

        </div>

        {/* Filter */}

        {showFilter && (
          <div className="bg-white border rounded-xl p-4 mb-5">

            <select
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value)
              }
              className="border rounded-lg p-2"
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

<div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-slate-100">

        <tr className="text-left">

          <th className="px-6 py-4">Customer</th>

          {columns.email && (
            <th className="px-6 py-4">Email</th>
          )}

          {columns.company && (
            <th className="px-6 py-4">Company</th>
          )}

          <th className="px-6 py-4">Status</th>

          {columns.assigned && (
            <th className="px-6 py-4">Assigned To</th>
          )}

          {columns.created && (
            <th className="px-6 py-4">Created</th>
          )}

          <th className="px-6 py-4 text-right">
            Action
          </th>

        </tr>

      </thead>

      <tbody className="divide-y">

        {filteredLeads.length === 0 ? (

          <tr>

            <td
              colSpan={7}
              className="text-center py-12 text-slate-500"
            >
              No Leads Found
            </td>

          </tr>

        ) : (

          filteredLeads.map((lead) => (

            <tr
              key={lead._id}
              className="hover:bg-slate-50"
            >

              {/* Customer */}

              <td className="px-6 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">

                    {lead.name.charAt(0).toUpperCase()}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {lead.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {lead.phone}
                    </p>

                  </div>

                </div>

              </td>

              {columns.email && (
                <td className="px-6 py-4">
                  {lead.email}
                </td>
              )}

              {columns.company && (
                <td className="px-6 py-4">
                  {lead.company}
                </td>
              )}

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>

              </td>

              {columns.assigned && (
                <td className="px-6 py-4">
                  {lead.assignedTo
                    ? lead.assignedTo.name
                    : "Unassigned"}
                </td>
              )}

              {columns.created && (
                <td className="px-6 py-4">
                  {new Date(
                    lead.createdAt
                  ).toLocaleDateString()}
                </td>
              )}

              {/* Assign Dropdown */}

              <td className="px-6 py-4 text-right relative">

                <button
                  onClick={() =>
                    setSelectedLead(
                      selectedLead === lead._id
                        ? null
                        : lead._id
                    )
                  }
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <MoreVertical size={18} />
                </button>

                {selectedLead === lead._id && (

                  <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-20 p-3">

                    <p className="text-xs text-slate-500 mb-2">
                      Assign Lead To
                    </p>

                    <select
                      defaultValue=""
                      onChange={(e) =>
                        assignLead(
                          lead._id,
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg p-2"
                    >

                      <option value="">
                        Select Member
                      </option>

                      {members.map((member) => (

                        <option
                          key={member._id}
                          value={member._id}
                        >
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

  {/* Pagination */}

  <div className="flex justify-between items-center border-t p-4">

    <p className="text-sm text-slate-500">
      Page {pagination.page} of {pagination.totalPages}
    </p>

    <div className="flex gap-2">

      <button
        disabled={pagination.page === 1}
        onClick={() =>
          fetchLeads(pagination.page - 1)
        }
        className="border rounded-lg px-4 py-2 disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      <button className="bg-indigo-600 text-white rounded-lg px-4 py-2">
        {pagination.page}
      </button>

      <button
        disabled={
          pagination.page === pagination.totalPages
        }
        onClick={() =>
          fetchLeads(pagination.page + 1)
        }
        className="border rounded-lg px-4 py-2 disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>

    </div>

  </div>

</div>

      </div>
    </div>
  );
};

export default Leads;