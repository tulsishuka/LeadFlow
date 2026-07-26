/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";
import axios from "axios";
import {
  UserPlus,
  Pencil,
  RotateCcw,
  Trash2,
  
  ChevronDown,
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

  const resetPassword = async (id: string) => {
    const password = prompt(
      "Enter new password"
    );

    if (!password) return;

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:3000/api/users/${id}/reset-password`,
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Password Reset");
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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              Team Members
            </h1>

            <p className="text-slate-500 mt-2">
              Manage all members from one place.
            </p>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Invite Member
          </button>

        </div>

        <div className="flex justify-between items-center mb-8">

          <div className="flex gap-2">

            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm">
              All Members
            </button>

            <button className="px-4 py-2 rounded-full bg-white border text-sm">
              Admin
            </button>

            <button className="px-4 py-2 rounded-full bg-white border text-sm">
              Members
            </button>

          </div>

          <button className="flex items-center gap-2 text-sm">
            Sort
            <ChevronDown className="w-4 h-4"/>
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {users.map((member) => (
            <div
              key={member._id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div>
                {/* Avatar + Actions */}
                <div className="flex items-start justify-between">

                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-lg font-bold text-indigo-700">
                    {member.name?.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex gap-2">

                    {/* Edit */}
                    <button
                      onClick={() => editUser(member)}
                      className="rounded p-2 hover:bg-slate-100"
                    >
                      <Pencil className="w-4 h-4 text-slate-600" />
                    </button>

                    {/* Reset Password */}
                    <button
                      onClick={() => resetPassword(member._id)}
                      className="rounded p-2 hover:bg-slate-100"
                    >
                      <RotateCcw className="w-4 h-4 text-blue-600" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteUser(member._id)}
                      className="rounded p-2 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>

                  </div>

                </div>

                {/* User Info */}
                <div className="mt-5">

                  <h3 className="font-bold text-slate-900 text-lg">
                    {member.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {member.email}
                  </p>

                  <span
                    className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      member.role === "admin"
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {member.role.toUpperCase()}
                  </span>

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









