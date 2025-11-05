# 🩺 DocTreat - منصتك الطبية الذكية

DocTreat هي منصة رعاية صحية متكاملة مصممة لتبسيط وتسهيل التفاعل بين **المرضى** و**الأطباء**. تتضمن حجز المواعيد، رفع المستندات الطبية، تتبع التاريخ الصحي، واستشارات مدعومة بالذكاء الاصطناعي في واجهة ويب حديثة وآمنة ومتجاوبة.

## 🌐 الروابط المباشرة

- **الواجهة الأمامية (Frontend)**: [https://drafrr.vercel.app](https://drafrr.vercel.app)
- **الخادم (Backend API)**: [https://drafr-3.onrender.com](https://drafr-3.onrender.com)

---

---

## 🚀 Features

### 👨‍⚕️ For Patients:
- Book doctor appointments based on city or specialization
- Upload and manage medical documents
- View full medical history
- Use AI assistant for quick health-related queries
- View doctor profiles and give feedback

### 👩‍⚕️ For Doctors:
- Manage appointments and patient interactions
- Access patient medical documents and history
- Write and upload medical notes
- Use secure document storage via Cloudinary

### 🤖 AI Integration:
- Powered by an AI Assistant to answer common medical queries instantly

### 🧾 Other Key Features:
- JWT-based authentication for doctors and patients
- Realtime messaging and notifications via Socket.io
- Email confirmations and appointment reminders
- Role-based access (Admin, Doctor, Patient)
- Responsive, modern UI using Tailwind CSS + React

---

## 🛠️ Tech Stack

| Area          | Tech Used                                  |
|---------------|---------------------------------------------|
| Frontend      | React, Redux Toolkit, Tailwind CSS          |
| Backend       | Node.js, Express.js                         |
| Database      | MongoDB                                     |
| Auth          | JWT-based authentication                    |
| Media Upload  | Cloudinary                                  |
| Emailing      | Nodemailer                                  |
| Realtime Comm | Socket.io                                   |
| AI Chat       | (Optional) OpenAI integration for health AI |

---

## 📁 Project Structure

### 🔙 Backend (`server/`)

```
server/
├── config/
│   ├── cloudinary.js
│   └── database.js
│
├── controllers/
│   ├── adminController.js
│   ├── aiController.js
│   ├── appointmentController.js
│   ├── authController.js
│   ├── doctorController.js
│   ├── doctorDocumentController.js
│   ├── medicalNoteController.js
│   └── paymentController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── multer.js
│
├── models/
│   ├── Admin.js
│   ├── appointmentModel.js
│   ├── Doctor.js
│   ├── DoctorDocument.js
│   ├── MedicalNote.js
│   ├── Message.js
│   ├── otpModel.js
│   └── userModel.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── aiRoutes.js
│   ├── appointmentRoutes.js
│   ├── doctorRoutes.js
│   ├── doctorDocumentRoutes.js
│   ├── medicalNoteRoutes.js
│   ├── paymentRoutes.js
│   └── userRoute.js
│
├── services/
│   └── (for third-party or shared service logic)
│
├── utils/
│   ├── cloudinary.js
│   ├── sendAppointmentEmail.js
│   ├── sendConfirmationEmail.js
│   ├── sendThankYouEmail.js
│   └── socket.js
│
├── .env
├── index.js
├── package.json
```

---

### 🧑‍💻 Frontend (`src/`)

```
src/
├── api/
│   └── authApi.js
│
├── components/
│   ├── ChatBox.js
│   ├── DocumentUploadPanel.js
│   ├── Footer.js
│   ├── MedicalHistoryPanel.js
│   ├── Navbar.js
│   └── UploadPatientDetails.js
│
├── pages/
│   ├── AdminDashboard.js
│   ├── AskAI.js
│   ├── BookAppointmentPage.js
│   ├── ConnectDoctors.js
│   ├── DoctorDashboard.js
│   ├── DoctorProfile.js
│   ├── Home.js
│   ├── Login.js
│   ├── PatientDashboard.js
│   └── SignUp.js
│
├── redux/
│   ├── authSlice.js
│   └── store.js
│
├── App.js
├── index.css
├── index.js
```

---

## 🧪 كيفية التشغيل المحلي

### 📋 المتطلبات الأساسية
- Node.js (الإصدار 14 أو أحدث)
- MongoDB (محلياً أو MongoDB Atlas)
- حساب Cloudinary (اختياري)

### 🐢 تشغيل الخادم (Backend)

```bash
cd server
npm install
npm run dev
```

تأكد من وجود ملف `.env` في مجلد server يحتوي على:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

### ⚡ تشغيل الواجهة الأمامية (Frontend)

```bash
# في المجلد الرئيسي
npm install
npm start
```

تأكد من وجود ملف `.env` في المجلد الرئيسي يحتوي على:

```env
REACT_APP_API_URL=http://localhost:8000
```

للإنتاج، استخدم:
```env
REACT_APP_API_URL=https://drafr-3.onrender.com
```

---

## 🌐 Deployment Suggestions

- **Frontend**: Vercel, Netlify
- **Backend**: Render, Railway, or Heroku
- **Database**: MongoDB Atlas
- **CDN/Storage**: Cloudinary

---

## 🙌 Acknowledgements

- OpenAI API for AI medical chat
- MongoDB for scalable NoSQL storage
- Cloudinary for document storage
- Tailwind for rapid UI styling

---

## 📧 تواصل معنا

**DocTreat** - منصة طبية متكاملة مصممة لخدمة المرضى والأطباء في المملكة العربية السعودية

- **البريد الإلكتروني**: dr.afrah@mezo.anonaddy.com
- **الهاتف**: +966541908619
- **الموقع**: المملكة العربية السعودية

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى فتح Pull Request أو Issue للمشاركة في تطوير المنصة.