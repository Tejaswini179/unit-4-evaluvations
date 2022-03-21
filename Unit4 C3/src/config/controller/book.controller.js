

const express= require("express");
const User = require("../model/book.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        res.send({book});
    } catch (error) {
       console.log(error) 
    }
})

module.exports = router;