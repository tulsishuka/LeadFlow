import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();

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
        `http://localhost:3000/api/leads/${id}`,
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
        `http://localhost:3000/api/leads/${id}/status`,
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
        `http://localhost:3000/api/leads/${id}/notes`,
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
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Lead Details
            </h1>

            <p className="text-slate-500">
              Manage assigned lead
            </p>

          </div>

          <button
            onClick={() => navigate(-1)}
            className="border px-5 py-2 rounded-lg hover:bg-slate-100"
          >
            Back
          </button>

        </div>
                {/* Lead Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Customer Name</p>
            <h2 className="text-xl font-semibold mt-1">
              {lead.name}
            </h2>
          </div>

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1">{lead.email}</p>
          </div>

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-1">{lead.phone}</p>
          </div>

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Company</p>
            <p className="mt-1">{lead.company}</p>
          </div>

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Assigned To</p>

            <p className="mt-1">
              {lead.assignedTo
                ? lead.assignedTo.name
                : "Unassigned"}
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p className="text-sm text-slate-500">Created</p>

            <p className="mt-1">
              {new Date(
                lead.createdAt
              ).toLocaleString()}
            </p>
          </div>

        </div>

        {/* Status Section */}

        <div className="mt-10 border rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Update Status
          </h2>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          >
            <option value="New">New</option>
            <option value="Contacted">
              Contacted
            </option>
            <option value="Qualified">
              Qualified
            </option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>

          <button
            onClick={updateStatus}
            disabled={savingStatus}
            className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {savingStatus
              ? "Updating..."
              : "Update Status"}
          </button>

        </div>

        {/* Notes */}

        <div className="mt-10 border rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Lead Notes
          </h2>

          <textarea
            rows={8}
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="Write notes about this lead..."
            className="w-full border rounded-xl p-4 resize-none"
          />

          <button
            onClick={saveNotes}
            disabled={savingNotes}
            className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {savingNotes
              ? "Saving..."
              : "Save Notes"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default LeadDetails;