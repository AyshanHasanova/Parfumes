import User from "../models/User.js"
import catchAsyncError from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../utils/errorHandler.js"
import sendToken from "../utils/sendToken.js"
import crypto from "crypto";

// --- QEYDİYYAT ---
export const registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password, referralCode } = req.body;
    let referredBy = null;
    if (referralCode) {
      const referrer = await User.findOne({ myReferralCode: referralCode });
      if (referrer) { referredBy = referrer._id; }
    }
    const user = await User.create({ name, email, password, referredBy });
    sendToken(user, 201, res);
});

// --- DAXİL OLMA ---
export const loginUser = catchAsyncError(async(req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(new ErrorHandler("Zəhmət olmasa email və ya şifrəni daxil edin", 400));
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Belə bir emaili olan istifadəçi tapilmadi", 404));
    const isPasswordMatched = await user.shifreleriMuqayiseEt(password);
    if (!isPasswordMatched) return next(new ErrorHandler("Şifrəniz yalnışdır", 401));
    sendToken(user, 200, res);
});

// --- ÇIXIŞ ---
export const logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });
    res.status(200).json({ message: "Çıxış etdiniz" });
});

// --- PROFİL (KOD YOXDURSA YARADAN VERSİYA) ---
export const getUserProfile = catchAsyncError(async (req, res, next) => {
    let user = await User.findById(req.user.id);
    
    // Əgər bazada bu userin kodu yoxdursa, dərhal yarat və yadda saxla
    if (!user.myReferralCode) {
        user.myReferralCode = crypto.randomBytes(3).toString("hex").toUpperCase();
        await user.save();
    }

    res.status(200).json({ success: true, user });
});

// --- DİGƏR REFERAL FUNKSİYALARI ---
export const getMyReferrals = catchAsyncError(async (req, res, next) => {
    const userId = req.user._id || req.user.id;
    const referrals = await User.find({ referredBy: userId }).select("name email createdAt referralStatus balance");
    res.status(200).json({ success: true, count: referrals.length, referrals });
});

export const getMyNetworkTree = catchAsyncError(async (req, res, next) => {
    const level1 = await User.find({ referredBy: req.user.id }).select("name email avatar myReferralCode referralStatus balance");
    res.status(200).json({
        success: true,
        tree: {
            name: req.user.name,
            attributes: { role: "Siz (Lider)", status: req.user.referralStatus || "Yeni" },
            children: level1.map(u => ({
                name: u.name,
                attributes: { email: u.email, status: u.referralStatus || "Yeni", balance: u.balance }
            }))
        }
    });
});

export const getAllUsersAdmin = catchAsyncError(async (req, res, next) => {
    const users = await User.find().select("name email balance referralStatus myReferralCode");
    res.status(200).json({ success: true, users });
});

export const updateReferralByAdmin = catchAsyncError(async (req, res, next) => {
    const { userId, amount, status } = req.body;
    const user = await User.findById(userId);
    if (!user) return next(new ErrorHandler("İstifadəçi tapılmadı", 404));
    if (amount !== undefined && amount !== null) user.balance += Number(amount);
    if (status) user.referralStatus = status;
    await user.save();
    res.status(200).json({ success: true, message: "Yeniləndi", user });
});


