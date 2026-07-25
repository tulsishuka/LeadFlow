import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Logo */}

        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
            LF
          </div>
        </div>

        {/* Heading */}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to your LeadFlow Pro account.
          </p>
        </div>

        {/* Error */}

        {error && (
          <div className="mb-5 rounded-xl bg-red-100 border border-red-300 text-red-600 p-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@leadflow.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <button
                type="button"
                className="text-indigo-600 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>
        </form>

        {/* Register */}

        <div className="text-center mt-6">
          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}

        <div className="mt-8 rounded-xl bg-slate-100 p-4">
          <h3 className="font-semibold text-slate-800 mb-2">
            Demo Credentials
          </h3>

          <div className="text-sm text-slate-600 space-y-1">
            <p>
              <strong>Admin:</strong>{" "}
              admin@leadflow.com
            </p>

            <p>
              <strong>Password:</strong>{" "}
              Admin@123
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;