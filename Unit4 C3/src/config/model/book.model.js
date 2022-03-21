
const mongoose= require("mongoose");

const bookSchema = new mongoose.Schema({
    like:{type:Number, require:true,default:0},
    coverImage:{type:String, require:false},
    content:{type:String, require:true},
    userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    publicationId : {type:mongoose.Schema.Types.ObjectId,ref:"publication",required:true},
    commentId : {type:mongoose.Schema.Types.ObjectId,ref:"comment",required:false}
},
{
    timestamps:true
})

module.exports = mongoose.model("book",bookSchema);