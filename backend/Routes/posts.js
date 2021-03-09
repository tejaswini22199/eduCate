
import express from 'express'
import {getPosts,createPost} from '../Controllers/Post.js'
const router=express.Router();
router.get('/',getPosts);
router.post('/',createPost);
export default router
