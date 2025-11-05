
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("تم تسجيل الدخول بنجاح!");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        const role = data.user?.role;

        setTimeout(() => {
          if (role === "Doctor") {
            navigate("/doctor/dashboard");
          } else if (role === "Admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/patient/dashboard");
          }
        }, 1000);
      } else {
        toast.error(data.message || "فشل تسجيل الدخول!");
      }
    } catch (error) {
      toast.error("حدث خطأ في الخادم!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white" dir="rtl">
      {/* ✅ Right - Login Form */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <form
          onSubmit={handleLogin}
          className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 p-8 rounded-xl max-w-md w-full space-y-4
          shadow-[0_0_40px_rgba(139,92,246,0.4)]
          hover:shadow-[0_0_60px_rgba(96,165,250,0.5)]
          border-[3px] border-transparent
          outline outline-2 outline-purple-500/30
          transition-all duration-1000 ease-in-out"
        >
          <h2 className="text-2xl font-bold text-center text-white">
            تسجيل الدخول
          </h2>

          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded text-right"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-white">
              كلمة المرور
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded text-right"
              placeholder="أدخل كلمة المرور"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white w-full py-2 rounded mt-4 font-bold"
          >
            دخول
          </button>
          
          <p className="text-center text-white text-sm">
            ليس لديك حساب؟{" "}
            <span 
              onClick={() => navigate("/signup")}
              className="text-yellow-300 cursor-pointer hover:underline font-bold"
            >
              إنشاء حساب جديد
            </span>
          </p>
        </form>
      </div>

      {/* ✅ Left - Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
        <div className="w-3/4 h-3/4 rounded-xl overflow-hidden
          shadow-[0_0_40px_rgba(139,92,246,0.4)]
          hover:shadow-[0_0_60px_rgba(96,165,250,0.5)]
          transition-all duration-1000 ease-in-out 
          border-[3px] border-transparent 
          outline outline-2 outline-purple-500/30">
          <img
            src="/images/signupDoc.png"
            alt="أطباء"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
