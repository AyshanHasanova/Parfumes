// backende pathlari ele alr

import express from "express"
import { createProduct,  deleteProduct,  getProducts, getProductsDetails, updateProduct } from "../controllers/productController.js"
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js"
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
const router=express.Router()
// Get isteyinin marsurutunu qurulmasi
router.get("/mehsullar",  getProducts)
router.get("/mehsullar/:id",getProductsDetails)

router.post('/admin/product', isAuthenticatedUser, authorizeRoles('admin'), upload.single('image'), createProduct)
router.delete('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)
router.put('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'),upload.single('image'),updateProduct) 

export default router