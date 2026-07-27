import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        formData
      );

      setSuccess("Account created successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
 
  <div className="min-h-screen w-full flex flex-col lg:flex-row bg-slate-50 font-sans">
    <div className="lg:w-[55%] bg-[#0F0069] text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="my-12 lg:my-auto max-w-2xl relative z-10">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
          Build stronger customer relationships with{" "}
          <span className="text-orange-400">LeadFlow Pro.</span>
        </h1>

        <div className="border border-white/15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold mb-1">
                New Businesses
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">8,540</span>

                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  +18%
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold mb-1">
                Success Rate
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">96%</span>

                <span className="text-xs text-indigo-200">
                  Growth
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 h-24 pt-4 border-t border-white/10">
            <div className="w-full h-[35%] rounded-t bg-indigo-400/30" />
            <div className="w-full h-[60%] rounded-t bg-indigo-400/40" />
            <div className="w-full h-[50%] rounded-t bg-indigo-400/30" />
            <div className="w-full h-[90%] rounded-t bg-indigo-300" />
            <div className="w-full h-[70%] rounded-t bg-indigo-400/40" />
            <div className="w-full h-[80%] rounded-t bg-indigo-400/50" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-white/10 pt-6 text-xs text-indigo-200 relative z-10">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-[#312E81]" />
          <div className="w-8 h-8 rounded-full bg-indigo-300 border-2 border-[#312E81]" />
          <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-[#312E81] flex items-center justify-center text-[10px] font-bold text-indigo-900">
            +5k
          </div>
        </div>

        <span>Trusted by 5,000+ growing businesses worldwide</span>
      </div>
    </div>

    {/* Right Section */}
    <div className="lg:w-[45%] bg-white p-8 lg:p-16 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Register to access your LeadFlow Pro workspace.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#1E1B4B] px-4 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:bg-indigo-950 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Register;