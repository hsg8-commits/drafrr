// import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 px-6 py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* About Us */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-white">About DocTreat</h2>
//           <p className="text-sm">
//             DocTreat is a telemedicine platform that helps patients connect with trusted doctors based on their city,
//             book appointments, chat in real-time, and manage their health records—all in one place.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-white">Quick Links</h2>
//           <ul className="text-sm space-y-2">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/login" className="hover:underline">Login</a></li>
//             <li><a href="/signup" className="hover:underline">Sign Up</a></li>
//             <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Our Mission */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-white">Our Mission</h2>
//           <p className="text-sm">
//             We aim to make healthcare more accessible and transparent by simplifying how people discover,
//             connect, and consult with medical professionals. No more long queues or uncertainty—just smart, digital healthcare.
//           </p>
//         </div>

//         {/* Contact & Social */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-white">Contact</h2>
//           <ul className="text-sm space-y-2">
//             <li className="flex items-center gap-2"><FaEnvelope /> prakashranjan.pr3636@gmail.com</li>
//             <li className="flex items-center gap-2"><FaPhone /> +91 9576409209</li>
//             <li className="flex items-center gap-2"><FaMapMarkerAlt /> Patna, India</li>
//           </ul>
//           <div className="flex gap-4 mt-4 text-xl">
//             <a href="https://github.com/prakash-pr07" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
//             <a href="https://linkedin.com/in/prakash-ranjan-142382258" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
//             <a href="https://leetcode.com/prakash_ranjan07" target="_blank" rel="noreferrer" className="hover:text-white"><SiLeetcode /></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
//         <p>© {new Date().getFullYear()} DocTreat | Built with <FaCode className="inline text-red-500" /> by Prakash Ranjan</p>
//         <a href="#" className="inline-block mt-2 text-sm hover:underline text-gray-400">
//           <FaArrowUp className="inline mr-1" /> Back to Top
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 to-blue-800 text-gray-300 px-6 py-10" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-white underline underline-offset-4">عن <span className="text-yellow-300">DocTreat</span></h2>
          <p className="text-sm leading-relaxed">
            <span className="text-white font-semibold">DocTreat</span> هي <span className="text-yellow-300 font-semibold">منصة طبية رقمية</span> مصممة لجعل الرعاية الصحية أكثر ذكاءً.
            يمكن للمرضى العثور بسهولة على أطباء حسب <span className="text-white">المدينة</span>، حجز المواعيد، الدردشة في الوقت الفعلي، ورفع السجلات الطبية—كل ذلك في مكان واحد.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-white underline underline-offset-4">روابط سريعة</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline text-white">🏠 الرئيسية</a></li>
            <li><a href="/login" className="hover:underline text-white">🔐 تسجيل الدخول</a></li>
            <li><a href="/signup" className="hover:underline text-white">📝 إنشاء حساب</a></li>
            <li><a href="/dashboard" className="hover:underline text-white">📊 لوحة التحكم</a></li>
            <li><a href="/about" className="hover:underline text-white">ℹ️ عن المنصة</a></li>
            <li><a href="/contact" className="hover:underline text-white">📞 تواصل معنا</a></li>
          </ul>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-white underline underline-offset-4">رؤيتنا</h2>
          <p className="text-sm leading-relaxed">
            نريد <span className="text-yellow-300 font-semibold">تحويل الوصول إلى الرعاية الصحية</span> من خلال جعلها أكثر رقمية وسهولة في الوصول وبدون تعقيدات.
            لا مزيد من الطوابير الطويلة. لا مزيد من البحث عن الأطباء. فقط <span className="font-semibold text-white">اتصالات ذكية</span> و<span className="text-white font-semibold">رعاية أفضل</span>.
          </p>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-white underline underline-offset-4">تواصل معنا</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><FaEnvelope className="text-yellow-300" /> dr.afrah@mezo.anonaddy.com</li>
            <li className="flex items-center gap-2"><FaPhone className="text-yellow-300" /> +966541908619</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-300" /> المملكة العربية السعودية</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} <span className="font-bold text-white">DocTreat</span> | جميع الحقوق محفوظة
        </p>
        <a href="#" className="inline-block mt-2 hover:underline text-gray-200">
          <FaArrowUp className="inline ml-1 text-yellow-300" /> العودة للأعلى
        </a>
      </div>
    </footer>
  );
};

export default Footer;
