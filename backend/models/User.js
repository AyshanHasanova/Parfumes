// import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"
// import crypto from "crypto";


// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required:[true,"Istfadeci adini daxil edin"],
//         maxLength :[50,"Istfadeci adi 50 simvoldan cox ola bilmez"]


//     },
//     email:{
//         type:String,
//         required:[true,"Istfadeci emailni daxil edin"],
//         unique: true
//     },
//     password:{
//         type: String,
//         required: [true,"Shifrenizi daxil edin"],
//         minLength: [6,"Shifre en azi 6 simvoldan ibaret olmalidir"],
//         select: false
//     },
//     avatar: {
//         public_id : String,
//         url: String
//     },
//     role: {
//         type:String,
//         default:"user"
//     },
//     resetPasswordToken :String,
//     resetPasswordExpire : Date
//     // reqemsal imza link sifrlenmis melumat
    
// },{timestamps:true})
// userSchema.pre("save",async function (next) {
//     if(!this.isModified("password")){
//          next()
//     }
//     this.password = await bcrypt.hash(this.password,12)
// })

// userSchema.methods.JwtTokeniEldeEt = function () {
//     return jwt.sign({
//         id:this._id
//     },process.env.JWT_SECRET_KEY,{
//         expiresIn: process.env.JWT_EXPIRES_TIME
//     })
// }

// userSchema.methods.shifreleriMuqayiseEt = async function (password){
//     return await bcrypt.compare(password,this.password)
// }

// // generate password reset token


// userSchema.methods.getResetPasswordToken = function() {
//     //generate token
 
 
//     const resetToken = crypto.randomBytes(20).toString("hex")
//     //hash and set to resetPasswordToken field
 
 
//     this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
 
 
//     //set token expire time
//     this.resetPasswordExpire = Date.now() + 30 * 60*1000
 
 
//     return resetToken
//  }
 


// export default mongoose.model("User",userSchema)


// import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"
// import crypto from "crypto";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Istfadeci adini daxil edin"],
//         maxLength: [50, "Istfadeci adi 50 simvoldan cox ola bilmez"]
//     },
//     email: {
//         type: String,
//         required: [true, "Istfadeci emailni daxil edin"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "Shifrenizi daxil edin"],
//         minLength: [6, "Shifre en azi 6 simvoldan ibaret olmalidir"],
//         select: false
//     },
//     // --- YENİ ƏLAVƏLƏR ---
//     myReferralCode: {
//         type: String,
//         unique: true
//     },
//     referredBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         default: null
//     },
//     // ---------------------
//     avatar: {
//         public_id: String,
//         url: String
//     },
//     role: {
//         type: String,
//         default: "user"
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date
// }, { timestamps: true })

// userSchema.pre("save", async function (next) {
//     // Şifrə dəyişibsə hash-lə
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12)
//     }

//     // YENİ: Əgər yeni istifadəçidirsə, ona unikal referal kod təyin et
//     if (!this.myReferralCode) {
//         this.myReferralCode = crypto.randomBytes(3).toString("hex").toUpperCase();
//     }
    
//     next()
// })

// userSchema.methods.JwtTokeniEldeEt = function () {
//     return jwt.sign({
//         id: this._id
//     }, process.env.JWT_SECRET_KEY, {
//         expiresIn: process.env.JWT_EXPIRES_TIME
//     })
// }

// userSchema.methods.shifreleriMuqayiseEt = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

// userSchema.methods.getResetPasswordToken = function () {
//     const resetToken = crypto.randomBytes(20).toString("hex")
//     this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
//     this.resetPasswordExpire = Date.now() + 30 * 60 * 1000
//     return resetToken
// }

// export default mongoose.model("User", userSchema)



import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Istfadeci adini daxil edin"],
        maxLength: [50, "Istfadeci adi 50 simvoldan cox ola bilmez"]
    },
    email: {
        type: String,
        required: [true, "Istfadeci emailni daxil edin"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Shifrenizi daxil edin"],
        minLength: [6, "Shifre en azi 6 simvoldan ibaret olmalidir"],
        select: false
    },
    // --- REFERAL SİSTEMİ SAHƏLƏRİ ---
    myReferralCode: {
        type: String,
        unique: true
    },
    referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    // Admin tərəfindən artırılacaq məbləğ
    balance: {
        type: Number,
        default: 0
    },
    // Admin tərəfindən veriləcək xüsusi status (Aktiv, Lider və s.)
    referralStatus: {
        type: String,
        enum: ["Yeni", "Aktiv", "Lider", "VIP"],
        default: "Yeni"
    },
    // -------------------------------
    avatar: {
        public_id: String,
        url: String
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
    }

    if (!this.myReferralCode) {
        this.myReferralCode = crypto.randomBytes(3).toString("hex").toUpperCase();
    }
    
    next()
})

userSchema.methods.JwtTokeniEldeEt = function () {
    return jwt.sign({
        id: this._id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

userSchema.methods.shifreleriMuqayiseEt = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000
    return resetToken
}

export default mongoose.model("User", userSchema)