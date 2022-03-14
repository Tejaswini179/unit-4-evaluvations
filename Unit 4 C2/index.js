const express = require("express");
const mongoose = require("mongoose");

const app = express();
const connect =()=>{
    mongoose.connect(
        "mongodb://127.0.0.1:27017/test"
    );
}
  
const userSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    middleName: {type:String, required:false},
    lastName: {type:String, required:true},
    age: {type:Number, required:true},
    email: {type:String, required:true},
    address: {type:String, required:true},
    gender : {type:String, required:false, default:"Female"},
    type: {type:String, required:true},

},
{
 timestamps: true,
 });

 const User = mongoose.model("users",userSchema);

   const branchSchema = mongoose.Schema({
       branchName: {type:String, required:true},
       address: {type:String, required:true},
       IFSC: {type:String, required:true},
       MICR: {type:String, required:true},
       userId:{type:String, required:true},

   },
   {
       timestamps:true,
   });

   

   const Branch = mongoose.model("branch",branchSchema);

    const savingSchema = mongoose.Schema({
        accountNumber: { type:Number, required:true },
        balance: { type:Number, required:true },
        interestRate: { type:Number, required:true },
      
    },
    {
        timestamps:true,
    })

    const Saving = mongoose.model("saving",savingSchema);



    const fixSchema = mongoose.Schema({
        savingId: {type:String, required:true},
        startDate: {type:String, required:true},
    },
    {
        timestamps:true,
    })
    const Fix = mongoose.model("fix",fixSchema)
 
  app.get("/user", async(req,res)=>{
      try {
          const users = await User.find().populate({
              path:
          }).lean().exec();
          return res.status(200).send({users:users})
      } catch (error) {
        return res.status(500).send({message:error.message})
      }
  })

 app.post("/saving", async(req,res)=>{
     try {
         const 
     } catch (error) {
         
     }
 })

 app.listen(5000, async (req,res)=>{
    try {
       
     await connect();

    } catch (error) {
        console.log(error)
    }
    console.log("listen to the port 5000");
 })