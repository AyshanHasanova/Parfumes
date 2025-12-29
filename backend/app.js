


// import express from "express"
// import dotenv from "dotenv"
// import { connectDatabase } from "./config/dbConnect.js"
// import cookieParser from "cookie-parser"
// import errorMiddleware from "./middlewares/error.js"
// import Stripe from "stripe";
// import cors from "cors"; // 1. CORS-u import et

// // Route importları
// import productRoutes from "./routes/product.js"
// import userRoutes from "./routes/user.js"
// import authRoutes from "./routes/authrouter.js"

// // Öncə DOTENV-i yükləyirik
// dotenv.config({ path: "config/config.env" })

// const app = express()

// // 2. CORS tənzimləməsi (Routes-dan əvvəl yazılmalıdır!)
// // server.js və ya app.js
// app.use(cors({
//   origin: ["http://localhost:5173", "https://flameteamm.netlify.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// // Məlumat bazasına qoşuluruq
// connectDatabase()

// // Middlewares
// app.use(express.json())
// app.use(cookieParser())

// // === Stripe Ödəniş Endpoint ===
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
// app.use("/api/v1", userRoutes)
// app.use("/api/v1", authRoutes)

// // 5. Error Middleware
// app.use(errorMiddleware)

// app.listen(process.env.PORT, () => {
//   console.log(`PORTUMUZ DINLENILIR : ${process.env.PORT} ve ${process.env.NODE_ENV} MUHITINDEDIR`)
// })





import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.js";
import Stripe from "stripe";
import cors from "cors";

// Route importları
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/authrouter.js";

// Öncə DOTENV-i yükləyirik
dotenv.config({ path: "config/config.env" });

const app = express();

// 1. Məlumat bazasına qoşuluruq
connectDatabase();

// 2. CORS tənzimləməsi
// Həm tək 'm', həm qoşa 'm' olan variantları bura yazıram ki, səhv riskini sıfıra endirək.
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://flameteam.netlify.app", 
    "https://flameteamm.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 3. Middlewares
app.use(express.json());
app.use(cookieParser());

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
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

// 5. Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVER ${PORT} PORTUNDA VE ${process.env.NODE_ENV} MUHITINDEDIR`);
});