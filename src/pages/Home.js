
import React, { useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const navbarLinks = [
    { name: "الرئيسية", path: "/", description: "الذهاب إلى الصفحة الرئيسية" },
    { name: "استشر الذكاء الاصطناعي", path: "/ask-ai", description: "تحدث مع مساعدنا الطبي الذكي" },
    { name: "تواصل مع الأطباء", path: "/connect-doctors", description: "ابحث عن أطباء في مدينتك" },
    { name: "تسجيل الدخول", path: "/login", description: "سجل دخولك إلى حسابك" },
    { name: "التسجيل", path: "/signup", description: "أنشئ حساباً جديداً" },
  ];

  const features = [
    {
      icon: "🔍",
      title: "ابحث عن طبيب",
      description: "اكتشف أطباء موثوقين في الوقت الفعلي"
    },
    {
      icon: "📅",
      title: "احجز موعداً",
      description: "حجز سهل وسريع وآمن مع الأطباء"
    },
    {
      icon: "📤",
      title: "رفع وتتبع المستندات الطبية",
      description: "حافظ على تنظيم جميع سجلاتك الصحية"
    },
    {
      icon: "⭐",
      title: "الوصول المميز للتواصل المباشر",
      description: "تواصل فوري مع أفضل الاختصاصيين"
    }
  ];

  const faqs = [
    {
      question: "ما هي منصة DocTreat؟",
      answer: "DocTreat هي منصة رعاية صحية رقمية تربط المرضى بالأطباء المعتمدين في المملكة العربية السعودية"
    },
    {
      question: "كيف يمكنني حجز موعد؟",
      answer: "ببساطة ابحث عن طبيب حسب المدينة أو التخصص، اختر موعداً، وأكد حجزك"
    },
    {
      question: "ما هي العضوية المميزة؟",
      answer: "العضوية المميزة تمنحك وصولاً أسرع إلى أفضل الأطباء ودعماً ذا أولوية"
    },
    {
      question: "كيف يمكنني الاحتفاظ بسجلاتي الطبية؟",
      answer: "يمكنك رفع الوصفات الطبية والتقارير وتتبع تاريخك الصحي من لوحة التحكم الخاصة بك"
    },
    {
      question: "كيف أثق بأن هؤلاء أطباء معتمدون؟",
      answer: "كل طبيب على منصة DocTreat يتم التحقق منه من خلال الوثائق الرسمية وشهادات المجلس الطبي"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <main className="flex-grow bg-white flex flex-col items-center pt-10 pb-10 space-y-12">
        {/* Hero Section */}
        <div className="w-[90vw] max-w-7xl border border-gray-300 rounded-2xl p-8 shadow-xl bg-gradient-to-br from-purple-900 to-blue-900 text-white flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold text-yellow-300">صحتك، بكل بساطة</h1>
            <p className="text-lg leading-relaxed">
              مع <strong>DocTreat</strong>، تواصل فوراً مع أطباء خبراء، اسأل أسئلة صحية مدعومة بالذكاء الاصطناعي، وأدِر صحتك من أي مكان. بدون تعقيدات، آمن، ومتاح دائماً.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img src="/images/doctor.png" alt="طبيب" className="w-[300px] h-auto object-contain rounded-xl shadow-2xl" />
          </div>
        </div>

        {/* Why Choose DocTreat */}
        <div className="w-[90vw] max-w-7xl border border-gray-300 rounded-2xl p-8 shadow-md bg-gradient-to-br from-purple-800 to-blue-800 text-white">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">لماذا تختار DocTreat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all text-black">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-[90vw] max-w-7xl border border-gray-300 rounded-2xl p-8 shadow-md bg-gradient-to-br from-purple-800 to-blue-800 text-white">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">ماذا يقول المرضى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "أحمد العتيبي", text: "منصة رائعة جداً. الحجز كان سريعاً وسهلاً!" },
              { name: "فاطمة الشهري", text: "المساعد الذكي قدم اقتراحات دقيقة بشكل مدهش." },
              { name: "خالد القحطاني", text: "وجدت طبيباً ممتازاً في منطقتي خلال دقائق." },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-black">
                <p className="italic mb-2">“{review.text}”</p>
                <p className="text-right font-bold text-purple-700">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-[90vw] max-w-7xl border border-gray-300 rounded-2xl p-8 shadow-lg bg-gradient-to-br from-purple-800 to-blue-800 text-white">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-right p-4 bg-white text-black rounded-md shadow hover:bg-purple-700 hover:text-white transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-purple-100 text-black rounded-b-md text-right">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

