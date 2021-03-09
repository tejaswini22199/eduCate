import ProductItem from '../Models/Product.js'
import express from 'express'
const router=express.Router();
//getting all doubts posted by people
export const getProducts=async(req,res)=>{
    try {
        const posts=await ProductItem.find();
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
// doubtPost creation
export const createProduct=async(req,res)=>{
    const {Name,contact,selectedFile,cost}=req.body;
    const productMessage=new ProductItem({Name,contact,selectedFile,cost});
    try {
         await productMessage.save();
        res.status(201).json(productMessage);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export default router