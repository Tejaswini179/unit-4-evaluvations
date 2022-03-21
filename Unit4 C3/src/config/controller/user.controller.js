
const express= require("express");
const User = require("../model/user.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.send({user});
    } catch (error) {
       console.log(error) 
    }
})

module.exports = router;