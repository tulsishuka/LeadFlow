/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/member/dashboard");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen w-full flex flex-col lg:flex-row bg-slate-50 font-sans">
      <div className="lg:w-[55%] bg-[#0F0069] text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="my-12 lg:my-auto max-w-2xl z-10">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-8">
            Transform your sales pipeline with{" "}
            <span className="text-orange-400">precision intelligence.</span>
          </h1>
          <div className=" border border-white/15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold mb-1">
                  Total Active Leads
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold">12,482</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    +14%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold mb-1">
                  Pipeline Velocity
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold">+24.8%</span>
                  <span className="text-xs text-indigo-200">MoM</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-24 pt-4 border-t border-white/10">
              <div className="w-full bg-indigo-400/30 rounded-t h-[40%]"></div>
              <div className="w-full bg-indigo-400/40 rounded-t h-[60%]"></div>
              <div className="w-full bg-indigo-400/30 rounded-t h-[50%]"></div>
              <div className="w-full bg-indigo-300 rounded-t h-[90%]"></div>
              <div className="w-full bg-indigo-400/40 rounded-t h-[70%]"></div>
              <div className="w-full bg-indigo-400/50 rounded-t h-[65%]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-indigo-200 border-t border-white/10 pt-6 z-10">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-[#312E81]"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-300 border-2 border-[#312E81]"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-[#312E81] flex items-center justify-center text-[10px] text-indigo-900 font-bold">
                +2k
              </div>
            </div>
            <span>Join 2,000+ teams scaling with LeadFlow Pro</span>
          </div>
        </div>
      </div>

      <div className="lg:w-[45%] bg-white p-8 lg:p-16 flex flex-col justify-between">
        <div className="max-w-md w-full mx-auto my-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Access your real-time revenue intelligence dashboard.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-600 p-4 text-sm flex items-center gap-2">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Email address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            <div>
              
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

          
            <button
              disabled={loading}
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#1E1B4B] hover:bg-indigo-950 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Log In
                </>
              )}
            </button>
          </form>
           <div className="mt-8 text-center text-sm text-slate-600">
          Create New Account {" "}
          <Link
            to="/Register"
            className="font-semibold text-indigo-600 hover:underline"
          >
          Register 
          </Link>
        </div>

          <div className="mt-8 rounded-xl bg-slate-100 p-4 border border-slate-200">
            <h3 className="font-semibold text-slate-800 text-xs mb-1">
              Demo Credentials
            </h3>
            <div className="text-xs text-slate-600 space-y-0.5">
              <p>
                <strong>Admin:</strong> admin@leadflow.com
              </p>
              <p>
                <strong>Password:</strong> Admin@123
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;