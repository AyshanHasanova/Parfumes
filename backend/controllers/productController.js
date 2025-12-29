
import Product from "../models/Product.js"
import cloudinary from '../config/cloudinary.js'
import catchAsyncError from "../middlewares/catchAsyncError.js"

// mehsullarin getirilmesi

export const getProducts = async (req,res)=>{
  const products = await Product.find()
  res.status(200).json({
    products
  })
}

  export const getProductsDetails = async (req,res)=>{
    const product= await Product.findById(req?.params?.id)
    if(!product){
      res.status(404).json({
        message:"Mehsul stokda tukenib"
      })
    }
    res.status(200).json({
      product
    })
  }

  export const createProduct = catchAsyncError(async (req, res, next) => {
    const { name, price, description, category, seller, stock } = req.body
    if (!req.file) return next(new ErrorHandler('Şəkil əlavə edin', 400))
   
   
    const result = await cloudinary.v2.uploader.upload(req.file.path, { folder: 'products' })
   
   
    const product = await Product.create({
      name, price, description, category, seller, stock,
      images: [{ public_id: result.public_id, url: result.secure_url }],
      user: req.user._id
    })
   
   
    res.status(201).json({ success: true, product })
   })

  // export const deleteProduct = async (req, res) => {
  //   const product = await Product.findById(req?.params?.id);
  
  //   if (!product) {
  //     return res.status(404).json({
  //       message: "Mehsul tapilmadi"
  //     });
  //   }
  
  //   await product.deleteOne();
  
  //   res.status(200).json({
  //     message: "Mehsul silindi"
  //   });
  // };
  

  // export const updateProduct = async (req,res)=>{
  //   const product = await Product.findByIdAndUpdate(req?.params?.id,req.body,{
  //     new:true
  //   })
  //   res.status(200).json({
  //     product
  //   })
  // }

  export const deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) return next(new ErrorHandler('Məhsul tapılmadı', 404))
    await cloudinary.v2.uploader.destroy(product.images[0].public_id)
    await product.deleteOne()
    res.json({ success: true, message: 'Məhsul silindi' })
   })

  
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) return next(new ErrorHandler('Məhsul tapılmadı', 404))
 
 
  if (req.file) {
    await cloudinary.v2.uploader.destroy(product.images[0].public_id)
    const result = await cloudinary.v2.uploader.upload(req.file.path, { folder: 'products' })
    product.images = [{ public_id: result.public_id, url: result.secure_url }]
  }
 
 
  Object.assign(product, req.body)
  await product.save()
 
 
  res.json({ success: true, product })
 })