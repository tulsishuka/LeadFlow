/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

const Dashboard = () => {
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
      <h1 className="text-3xl font-bold mb-6">
        My Assigned Leads
      </h1>

      <div className="grid gap-5">

        {leads.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            No Leads Assigned
          </div>
        ) : (
          leads.map((lead) => (
            <div
              key={lead._id}
              className="bg-white rounded-xl shadow border p-5"
            >
              <h2 className="text-xl font-semibold">
                {lead.name}
              </h2>

              <p>{lead.company}</p>

              <p>{lead.email}</p>

              <p>{lead.phone}</p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                {lead.status}
              </span>
<button
  onClick={() => navigate(`/leads/${lead._id}`)}
  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
>
  Open Lead
</button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Dashboard;