const mongoose= require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:{type:String, require:true},
    lastName:{type:String, require:false},
    age:{type:Number, require:true},
    email:{type:String, require:true},
    profileImages:{type:String, require:true},
    commentId : {type:mongoose.Schema.Types.ObjectId,ref:"comment",required:false}

},
{
    timestamps:true
})

module.exports = mongoose.model("user",UserSchema);