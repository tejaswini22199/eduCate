import DoubtMessage from '../Models/Post.js'
import express from 'express'
const router=express.Router();
//getting all doubts posted by people
export const getPosts=async(req,res)=>{
    try {
        const posts=await DoubtMessage.find();
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
// doubtPost creation
export const createPost=async(req,res)=>{
    // console.log(req.body);
    const {category,creator,selectedFile}=req.body;
    // console.log(req);
    const postMessage=new DoubtMessage({category,creator,selectedFile});
    try {
         await postMessage.save();
        res.status(201).json(postMessage);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export default router