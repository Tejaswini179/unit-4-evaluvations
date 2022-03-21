



const express= require("express");
const Comment = require("../model/comment.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const comment = await Comment.create(req.body);
        res.send({comment});
    } catch (error) {
       console.log(error) 
    }
})

module.exports = router;