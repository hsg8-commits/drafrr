
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [chatURL, setChatURL] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleProtectedClick = (type) => {
    // Special case: if not logged in and trying to access dashboard → scroll to footer
    if (type === "dashboard" && !user) {
      toast.error("الرجاء تسجيل الدخول أولاً");
      const footer = document.getElementById("footer");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Other protected routes
    if (!user) {
      toast.error("الرجاء تسجيل الدخول أولاً");
      return;
    }

    switch (type) {
      case "ask-ai":
        navigate("/ask-ai");
        break;

      case "connect-doctors":
        navigate("/connect-doctors");
        break;

      case "chat":
        if (!user.isPremium) {
          toast.error("يجب أن تكون عضواً مميزاً أولاً");
          return;
        }
        const chatAppURL = `http://localhost:3001/chat?patientEmail=${user.email}`;
        setChatURL(chatAppURL);
        setShowChat(true);
        break;

      case "dashboard":
        const dashboardPath =
          user.role === "Doctor" ? "/doctor/dashboard" : "/patient/dashboard";
        navigate(dashboardPath);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <nav className="border-4 border-black bg-gradient-to-br from-purple-800 to-blue-800 text-white px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row justify-between items-center shadow-lg" dir="rtl">
        {/* Logo */}
        <div className="text-2xl font-bold mb-3 sm:mb-0">
          <span className="text-white">Doc</span>
          <span className="text-yellow-300">Treat</span>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base font-semibold mb-3 sm:mb-0">
          <Link
            to="/"
            className="px-3 sm:px-4 py-1 border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
          >
            الرئيسية
          </Link>

          <button
            onClick={() => handleProtectedClick("ask-ai")}
            className="px-3 sm:px-4 py-1 border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
          >
            اسأل الذكاء الاصطناعي
          </button>

          <button
            onClick={() => handleProtectedClick("connect-doctors")}
            className="px-3 sm:px-4 py-1 border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
          >
            تواصل مع الأطباء
          </button>

          <button
            onClick={() => handleProtectedClick("chat")}
            className="px-3 sm:px-4 py-1 border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
          >
            الدردشة المباشرة
          </button>

          <button
            onClick={() => handleProtectedClick("dashboard")}
            className="px-3 sm:px-4 py-1 border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
          >
            لوحة التحكم
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          {!user ? (
            <>
              <Link to="/signup">
                <button className="px-3 sm:px-4 py-1 font-bold border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200">
                  إنشاء حساب
                </button>
              </Link>
              <Link to="/login">
                <button className="px-3 sm:px-4 py-1 font-bold border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200">
                  تسجيل الدخول
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 sm:px-4 py-1 font-bold border-2 border-black text-black bg-white rounded shadow-md hover:bg-gradient-to-br hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-200"
            >
              تسجيل الخروج
            </button>
          )}
        </div>
      </nav>

      {/* ChatApp Iframe */}
      {showChat && (
        <div className="fixed top-0 right-0 w-1/2 h-full z-50 shadow-xl border-l-4 border-purple-700 bg-white">
          <iframe
            src={chatURL}
            title="Chat With Doctor"
            className="w-full h-full"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
