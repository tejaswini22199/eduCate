import express from 'express'
import {getProducts,createProduct} from '../Controllers/product.js'
const router=express.Router();
router.get('/',getProducts);
router.post('/',createProduct);
export default router
