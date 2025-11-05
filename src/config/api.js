// API Configuration
// تكوين الاتصال بالخادم

// تحديد URL الخادم بناءً على البيئة
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://drafr-3.onrender.com";

// تصدير الإعدادات
export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // لإرسال الكوكيز
};

// إنشاء URLs للمسارات المختلفة
export const API_ENDPOINTS = {
  // Auth endpoints
  login: `${API_BASE_URL}/api/v1/login`,
  signup: `${API_BASE_URL}/api/v1/signup`,
  
  // AI endpoints
  askAI: `${API_BASE_URL}/api/v1/ask-ai`,
  
  // Doctor endpoints
  searchDoctorsByCity: (city) => `${API_BASE_URL}/api/v1/doctors/search/city?city=${city}`,
  
  // Appointment endpoints
  bookAppointment: `${API_BASE_URL}/api/appointment/book`,
  verifyOtp: `${API_BASE_URL}/api/appointment/verify-otp`,
  confirmAppointment: `${API_BASE_URL}/api/appointment/confirm`,
  
  // Payment endpoints
  createOrder: `${API_BASE_URL}/api/payment/create-order`,
  verifyPayment: `${API_BASE_URL}/api/payment/verify`,
  
  // Medical notes endpoints
  getMedicalNotes: (userId) => `${API_BASE_URL}/api/medical-notes/${userId}`,
  
  // Chat endpoints
  chatHistory: (senderEmail, receiverEmail) => 
    `${API_BASE_URL}/api/v1/chat/history?senderEmail=${senderEmail}&receiverEmail=${receiverEmail}`,
};

// Socket.io URL
export const SOCKET_URL = API_BASE_URL;

export default API_CONFIG;
