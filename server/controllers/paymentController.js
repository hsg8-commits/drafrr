import crypto from "crypto";
import User from "../models/userModel.js";
import { sendThankYouEmail } from "../utils/sendThankYouEmail.js";

let instance = null;

// Initialize Razorpay only if API keys are available
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  const Razorpay = await import("razorpay");
  instance = new Razorpay.default({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

// Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    if (!instance) {
      return res.status(503).json({
        success: false,
        message: "خدمة الدفع غير متوفرة حالياً",
      });
    }

    const options = {
      amount: 10 * 100, // ₹10 in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await instance.orders.create(options);
    console.log("🔵 Order Created:", order.id);

    return res.status(200).json({
      success: true,
      order,
      message: "تم إنشاء الطلب بنجاح",
    });
  } catch (error) {
    console.error(" Razorpay Order Error:", error);
    return res.status(500).json({
      success: false,
      message: "فشل في إنشاء طلب الدفع",
    });
  }
};

//  Verify Razorpay Payment
export const verifyPayment = async (req, res) => {
  try {
    if (!instance) {
      return res.status(503).json({
        success: false,
        message: "خدمة الدفع غير متوفرة حالياً",
      });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // 🛡 Check for authenticated user
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "غير مصرح: المستخدم غير مصادق عليه",
      });
    }

    //  Validate Razorpay signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "توقيع غير صالح",
      });
    }

    //  Fetch and update user
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "المستخدم غير موجود",
      });
    }

    //  Update user's premium status only if not already premium
    if (!user.isPremium) {
      user.isPremium = true;
      await user.save();

      //  Send Thank You email
      await sendThankYouEmail(user.email);
    }

    return res.status(200).json({
      success: true,
      message: "تم التحقق من الدفع وتفعيل الاشتراك المميز",
    });
  } catch (error) {
    console.error(" Razorpay Verification Error:", error);
    return res.status(500).json({
      success: false,
      message: "فشل التحقق من الدفع",
      error: error.message,
    });
  }
};

