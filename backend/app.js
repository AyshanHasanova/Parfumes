// import express from "express"
// import dotenv from "dotenv"
// import { connectDatabase } from "./config/dbConnect.js"
// import cookieParser from "cookie-parser"
// import errorMiddleware from "./middlewares/error.js"
// import Stripe from "stripe";

// const app = express ()

// // Router (marsurutlarin daxil edilmesi)
// import productRoutes from "./routes/product.js"
// import userRoutes from "./routes/user.js"
// import authRoutes from "./routes/authrouter.js"

// // === Stripe Ödəniş Endpoint ===
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/api/v1/create-payment-intent", async (req, res) => {
//   try {
//     const { amount } = req.body; // Frontend-dən göndərilən ümumi məbləğ

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount, // cent cinsindən
//       currency: "usd", // və ya AZN
//       payment_method_types: ["card"],
//     });

//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// dotenv.config({path: "config/config.env"})


// connectDatabase()
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/v1",productRoutes)
// app.use("/api/v1",userRoutes)
// app.use("/api/v1",authRoutes)


// app.use(errorMiddleware)
// app.listen(process.env.PORT, ()=>{
//     console.log(`PORTUMUZ DINLENILIR : ${process.env.PORT} ve ${process.env.NODE_ENV} MUHITINDEDIR`)
// })


// import express from "express"
// import dotenv from "dotenv"
// import { connectDatabase } from "./config/dbConnect.js"
// import cookieParser from "cookie-parser"
// import errorMiddleware from "./middlewares/error.js"
// import Stripe from "stripe";

// // Route importları
// import productRoutes from "./routes/product.js"
// import userRoutes from "./routes/user.js"
// import authRoutes from "./routes/authrouter.js"

// const app = express()

// // 1. Öncə DOTENV-i yükləyirik (Hər şeydən əvvəl!)
// dotenv.config({ path: "config/config.env" })

// // 2. Məlumat bazasına qoşuluruq
// connectDatabase()

// // 3. Middlewares
// app.use(express.json())
// app.use(cookieParser())

// // === Stripe Ödəniş Endpoint ===
// // (Bura dotenv-dən sonra gəlməlidir ki, Secret Key-i oxuya bilsin)
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/api/v1/create-payment-intent", async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       payment_method_types: ["card"],
//     });
//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 4. Marşrutlar (Routes)
// app.use("/api/v1", productRoutes)
// app.use("/api/v1", userRoutes) // MyReferrals adətən buradadır
// app.use("/api/v1", authRoutes)

// // 5. Error Middleware (Həmişə sonda olmalıdır)
// app.use(errorMiddleware)

// app.listen(process.env.PORT, () => {
//   console.log(`PORTUMUZ DINLENILIR : ${process.env.PORT} ve ${process.env.NODE_ENV} MUHITINDEDIR`)
// })


import express from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js"
import cookieParser from "cookie-parser"
import errorMiddleware from "./middlewares/error.js"
import Stripe from "stripe";
import cors from "cors"; // 1. CORS-u import et

// Route importları
import productRoutes from "./routes/product.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/authrouter.js"

// Öncə DOTENV-i yükləyirik
dotenv.config({ path: "config/config.env" })

const app = express()

// 2. CORS tənzimləməsi (Routes-dan əvvəl yazılmalıdır!)
// server.js və ya app.js
app.use(cors({
  origin: ["http://localhost:5173", "https://flameteamm.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Məlumat bazasına qoşuluruq
connectDatabase()

// Middlewares
app.use(express.json())
app.use(cookieParser())

// === Stripe Ödəniş Endpoint ===
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/api/v1/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Marşrutlar (Routes)
app.use("/api/v1", productRoutes)
app.use("/api/v1", userRoutes)
app.use("/api/v1", authRoutes)

// 5. Error Middleware
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
  console.log(`PORTUMUZ DINLENILIR : ${process.env.PORT} ve ${process.env.NODE_ENV} MUHITINDEDIR`)
})