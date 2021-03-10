import mongoose from 'mongoose'
const ProductSchema=mongoose.Schema({
    Name:String,
    Contact:Number,
    cost:Number,
    selectedFile:String,
    createdAt:{
        type:Date,
        default:new Date(),
    },
   
})
var ProductItem=mongoose.model('ProductItem',ProductSchema);
export default ProductItem;