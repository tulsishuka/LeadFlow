/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Pencil,
  Trash2,

} from "lucide-react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const TeamMembers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:3000/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data);

      setUsers(data.users);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    const ok = window.confirm(
      "Delete this member?"
    );

    if (!ok) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };


 

  const editUser = async (user: User) => {
    const name = prompt(
      "Name",
      user.name
    );

    if (!name) return;

    const role = prompt(
      "Role",
      user.role
    );

    if (!role) return;

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:3000/api/users/${user._id}`,
        {
          name,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
    } catch (err) {
      console.log(err);
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


<div className="min-h-screen bg-[#F2EFFF] p-4 sm:p-6 lg:p-8 text-slate-800">
  <div className="max-w-7xl mx-auto">
    <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Team Management
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Manage permissions, roles, and performance metrics for your
          enterprise team.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {users.map((member) => (
        <div
          key={member._id}
          className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <div>
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-lg font-bold text-slate-700">
                {member.name?.charAt(0).toUpperCase()}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => editUser(member)}
                  className="text-slate-400 transition hover:text-slate-700"
                  title="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>

                <button
                  onClick={() => deleteUser(member._id)}
                  className="text-slate-400 transition hover:text-red-500"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold leading-snug text-[#0F0069]">
                {member.name}
              </h3>

              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                {member.role || "MEMBER"}
              </p>

              <p className="mt-2 truncate text-xs text-slate-400">
                {member.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
   
  );
};

export default TeamMembers;









