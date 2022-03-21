



const express= require("express");
const Publication = require("../model/publication.model");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const publication = await Publication.create(req.body);
        res.send({publication});
    } catch (error) {
       console.log(error) 
    }
})

module.exports = router;