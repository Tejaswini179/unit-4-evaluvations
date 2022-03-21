
const mongoose= require("mongoose");

const publicationSchema = new mongoose.Schema({
    name:{type:String, require:true,default:0},
},
{
    timestamps:true
})

module.exports = mongoose.model("publication",publicationSchema);