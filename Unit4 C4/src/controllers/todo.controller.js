
 const express = require("express");

 const Todo = require("../models/todo.model")

 const  crudController = require("./crud.controller")

 const router  = express.Router();

 router.get("",async(req,res)=>{

    try {
        
        const todos = await Todo.find()
        .populate({
            path:"todoId",
            select:["title"],
            populate: {path:"userId", select: ["firstname"]},

        }) 
        .populate({path: "userId", select:["firstName"]})
        .lean().exec();

        return res.status(200).send(todos)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
 })

  router.post("",crudController.post(Todo));

  router.get("/:id",async (req,res)=>{
      try {
          const todo = await Todo.findById(req.params.id)
          .populate({
            path:"todoId",
            select:["title","body"],
            populate:{path:"userId",select:["password",firstname]}
          })
          .populate({path:"userId",select:["firstName"]})
          .lean().exec()

          return res.status(201).send(todo)

      } catch (error) {
      
        return res.status(500).send({message:error.message})
      }
  })


  router.path(":/id",async (req,res)=>{
      try {
          
        const todo = await Todo.findByIdAndUpdate(req.param.id, {new:true})
        .populate({
            path:"todoId",
            select:["title"],
           populate:{path:"userId",select:["firstName"]},

        })

        .populate({
            path:"UserId",select:["email"]
        }).lean().exec();
        return res.status(200).send(todo)
      } catch (error) {
          
      }
  })

  router.delete("/:id", crudController.deleteOne(Todo));

  module.exports = router;