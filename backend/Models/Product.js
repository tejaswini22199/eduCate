import mongoose from 'mongoose'
const DoubtpostSchema=mongoose.Schema({
    Name:String,
    Contact:Number,
    selectedFile:String,
    cost:Number,
    createdAt:{
        type:Date,
        default:new Date(),
    },
   
})
var ProductItem=mongoose.model('ProductItem',DoubtpostSchema);
export default ProductItem;