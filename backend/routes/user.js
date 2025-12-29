
// import express from "express"
// import { getUserProfile, loginUser, logout, registerUser } from "../controllers/userControllers.js"

// import {isAuthenticatedUser} from "../middlewares/auth.js"
// const router = express.Router()

// router.post("/register", registerUser)
// router.post("/login", loginUser)
// router.get("/logout", logout)
// router.route("/me/referrals").get(isAuthenticatedUser, getMyReferrals);



// router.get("/me", isAuthenticatedUser, getUserProfile)


// export default router


// import express from "express";
// // getMyReferrals funksiyasını buradan import edirik
// import { 
//   getUserProfile, 
//   loginUser, 
//   logout, 
//   registerUser, 
//   getMyReferrals 
// } from "../controllers/userControllers.js";

// import { isAuthenticatedUser } from "../middlewares/auth.js";
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/logout", logout);

// // Sizin əlavə etdiyiniz route
// router.route("/me/referrals").get(isAuthenticatedUser, getMyReferrals);

// router.get("/me", isAuthenticatedUser, getUserProfile);

// export default router;


import express from "express";
import { 
  getUserProfile, 
  loginUser, 
  logout, 
  registerUser, 
  getMyReferrals,
  getMyNetworkTree,         // Yeni: Ağac görüntüsü üçün
  getAllUsersAdmin,        // Yeni: Admin üçün bütün istifadəçilər
  updateReferralByAdmin    // Yeni: Adminin balans/status yeniləməsi
} from "../controllers/userControllers.js";

import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

// --- ÜMUMİ YOLLAR (AUTH) ---
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);

// --- İSTİFADƏÇİ YOLLARI (ŞƏXSİ) ---
router.get("/me", isAuthenticatedUser, getUserProfile);

// Referal cədvəli
router.route("/me/referrals").get(isAuthenticatedUser, getMyReferrals);

// Referal ağacı (Tree View)
router.route("/me/network-tree").get(isAuthenticatedUser, getMyNetworkTree);


// --- ADMİN YOLLARI (YALNIZ ADMİNLƏR ÜÇÜN) ---

// Bütün istifadəçiləri referal məlumatları ilə görmək
router.route("/admin/users").get(
    isAuthenticatedUser, 
    authorizeRoles("admin"), 
    getAllUsersAdmin
);

// İstifadəçinin balansını və ya statusunu yeniləmək
router.route("/admin/referral-update").put(
    isAuthenticatedUser, 
    authorizeRoles("admin"), 
    updateReferralByAdmin
);

export default router;