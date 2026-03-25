const bookingSchema = require("./schema");
const hotelsSchema = require("../hotels/schema");
const crypto = require("crypto");
const nodemailder = require("nodemailer");
require("dotenv").config();

exports.getByResID = async (reservationId) => {
  try {
    const booking = await bookingSchema
      ?.findOne({ reservationId })
      ?.populate("hotelId", "hotelName address wifiPassword gmapurl");
    return booking ? booking.toObject() : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

// tcqn rtnb savj pykc

const generateReservationId = async (hotelId) => {
  try {
    const hotel = await hotelsSchema?.findById(hotelId);
    // if (hotel) {
    //   throw new Error("Hotel not found");
    // }

    const initials = hotel.hotelName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    const count = await bookingSchema?.countDocuments({ hotelId });
    const nextNumber = count + 1;

    return `RES${initials}${nextNumber}`;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

exports.createBooking = async (bookingInput) => {
  try {
    const { reservationId: _, ...rest } = bookingInput;
    const reservationId = await generateReservationId(bookingInput.hotelId);
    const create = await bookingSchema?.create({ ...rest, reservationId });
    return create ? create.toObject() : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

// Otp

const transporter = nodemailder?.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const otpStore = new Map();
const OTP_EXPIRE_MS = 5 * 60 * 1000;

const generateOTP = () => crypto.randomInt(100000, 999999).toString();

exports.sendOtp = async (email) => {
  try {
    const otp = generateOTP();
    otpStore.set(email, { otp, expiresAt: Date.now() + OTP_EXPIRE_MS });

    await transporter?.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your OTP Verification Code",
      html: `
        <h2>OTP Verification</h2>
        <p>Your verification code is: <strong>${otp}</strong></p>
        <p>Valid for 5 minutes.</p>
      `,
    });

    return { success: true, messages: "OTP sent successfully" };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

exports.verifyOTP = (email, otp) => {
  try {
    const record = otpStore.get(email);
    if (!record)
      return { success: false, message: "OTP not found. Request a new one." };
    if (Date.now() > record.expiresAt) {
      otpStore.delete(email);
      return { success: false, message: "OTP expired. Request a new one." };
    }
    if (record.otp !== otp) return { success: false, message: "Invalid OTP." };
    otpStore.delete(email);
    return { success: true, message: "OTP verified successfully" };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
