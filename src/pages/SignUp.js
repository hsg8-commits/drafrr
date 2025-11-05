import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    state: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      city,
      state,
      role,
    } = formData;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !city || !state || !role) {
      toast.error("الرجاء ملء جميع الحقول");
      return false;
    }

    if (!email.includes("@")) {
      toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      return false;
    }

    if (password.length < 6) {
      toast.error("يجب أن تكون كلمة المرور 6 أحرف على الأقل");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة");
      return false;
    }

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      const signupRes = await axios.post("http://localhost:5000/api/v1/signup", {
        ...formData,
      });

      if (signupRes.data.success) {
        toast.success("تم إنشاء الحساب بنجاح");
        localStorage.setItem("token", signupRes.data.token);
        navigate("/login");
      } else {
        toast.error(signupRes.data.message || "فشل التسجيل");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "خطأ أثناء التسجيل");
    }
  };





  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row" dir="rtl">
      {/* ✅ Right - Signup Form */}
      <div className="md:w-1/2 w-full bg-white flex justify-center items-center p-6">
        <form
            className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 p-8 rounded-xl max-w-md w-full space-y-4 
             shadow-[0_0_40px_rgba(139,92,246,0.4)] 
             border-[3px] border-transparent 
             outline outline-2 outline-purple-500/30 
             hover:shadow-[0_0_60px_rgba(96,165,250,0.5)] 
             transition-all duration-1000 ease-in-out">
          <h2 className="text-2xl font-bold text-center text-white">إنشاء حساب جديد</h2>

          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" placeholder="الاسم الأول" value={formData.firstName} onChange={handleChange} required className="p-2 border rounded text-right" />
            <input name="lastName" placeholder="الاسم الأخير" value={formData.lastName} onChange={handleChange} required className="p-2 border rounded text-right" />
          </div>

          <input type="email" name="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded text-right" />
          <input name="phone" placeholder="رقم الهاتف" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded text-right" />

          <div className="grid grid-cols-2 gap-4">
            <input type="password" name="password" placeholder="كلمة المرور" value={formData.password} onChange={handleChange} required className="p-2 border rounded text-right" />
            <input type="password" name="confirmPassword" placeholder="تأكيد كلمة المرور" value={formData.confirmPassword} onChange={handleChange} required className="p-2 border rounded text-right" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input name="city" placeholder="المدينة" value={formData.city} onChange={handleChange} required className="p-2 border rounded text-right" />
            <input name="state" placeholder="المحافظة" value={formData.state} onChange={handleChange} required className="p-2 border rounded text-right" />
          </div>

          <select name="role" value={formData.role} onChange={handleChange} required className="w-full p-2 border rounded text-right">
            <option value="">اختر الدور</option>
            <option value="Patient">مريض</option>
            <option value="Doctor">طبيب</option>
          </select>

          <button
            onClick={handleSignup}
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 font-bold"
          >
            تسجيل حساب جديد
          </button>
          
          <p className="text-center text-white text-sm">
            لديك حساب بالفعل؟{" "}
            <span 
              onClick={() => navigate("/login")}
              className="text-yellow-300 cursor-pointer hover:underline font-bold"
            >
              تسجيل الدخول
            </span>
          </p>
        </form>
      </div>

      {/* ✅ Left - Hospital Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
        <div className="w-3/4 h-3/4 rounded-xl overflow-hidden
             shadow-[0_0_40px_rgba(139,92,246,0.4)]
             hover:shadow-[0_0_60px_rgba(96,165,250,0.5)]
             transition-all duration-1000 ease-in-out border-[3px] border-transparent
             outline outline-2 outline-purple-500/30">
          <img
            src="/images/signupDoc.png"
            alt="أطباء"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </div>
  );
};

export default SignupPage;


