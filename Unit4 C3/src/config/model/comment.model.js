
const mongoose= require("mongoose");

const commentSchema = new mongoose.Schema({
    body:{type:String, require:true},
    
},
{
    timestamps:true
})

module.exports = mongoose.model("comment",commentSchema);