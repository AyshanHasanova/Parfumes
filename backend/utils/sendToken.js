// export default (user,statusCode,res)=>{
//    const token = user.JwtTokeniEldeEt()

//    const options = {
//     expires : new Date (Date.now()+ Number(process.env.COOKIE_EXPIRES_TIME)+24*60*60*1000),
//     httpOnly :true
//    }
//    res.status(statusCode).cookie("token",token,options).json({token})
// }


export default (user, statusCode, res) => {
   const token = user.JwtTokeniEldeEt();

   const options = {
    expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // --- BU İKİ SƏTİRİ ƏLAVƏ ET ---
    secure: true,      // Kuki yalnız HTTPS üzərindən göndərilir (Render üçün mütləqdir)
    sameSite: "none",  // Frontend və Backend fərqli domenlərdədirsə mütləqdir
   };

   res.status(statusCode).cookie("token", token, options).json({
       success: true, // Frontend-də yoxlamaq üçün əlavə etmək yaxşı olar
       token,
       user           // Rolun gəldiyinə əmin olmaq üçün bunu da göndər
   });
}