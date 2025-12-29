import mongoose from "mongoose";
import products from "./data.js"

import Product from "../models/Product.js";


const seedProducts = async()=>{
try{
 await mongoose.connect("mongodb+srv://hsnovaa734_db_user:fl%40me_te%40m1990@cluster0.an9n4ag.mongodb.net/parfumes")
 await Product.deleteMany()
 console.log("zibillik temizlendi")
 await Product.insertMany(products)
 console.log("Mehsullar geldi")
 process.exit()
}
catch(err){
console.log(err.message)
process.exit()
}
}

seedProducts()