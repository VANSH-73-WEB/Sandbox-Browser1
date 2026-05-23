import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Welcome Back
          </h1>

          <p className="text-slate-400 text-sm">
            Login to continue to Browser Sandbox
          </p>
        </div>

        {/* Form */}
        <div className="space-y-7">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-300 mb-3 block">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900/70 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white px-5 py-4 rounded-xl"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-slate-300 mb-3 block">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-slate-900/70 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white px-5 py-4 rounded-xl"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/20"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 transition font-medium"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;