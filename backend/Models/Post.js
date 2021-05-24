import mongoose from 'mongoose'
const DoubtpostSchema=mongoose.Schema({
    category:String,
    creator:String,
    selectedFile:String,
    createdAt:{
        type:Date,
        default:new Date(),
    },
})
var DoubtMessage=mongoose.model('DoubtMessage',DoubtpostSchema);
export default DoubtMessage;