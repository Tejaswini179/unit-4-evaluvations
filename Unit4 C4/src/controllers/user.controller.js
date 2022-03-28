

const express = require("express");

const User = require("../models/user.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.get("", async (req,res)=>{

    try {
        
        const users = await User.find().lean().exec();

        return res.status(200).send({users : users})

    } catch (error) {
        
        return res.status(500).send({message: error.message})
    }
})

 router.post("", crudController.post(User));

 router.get(":/id",async(req,res)=>{
     try {
         
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);

     } catch (error) {
        
        return res.status(500).send({message: error.message})
     }

 })

module.exports = router