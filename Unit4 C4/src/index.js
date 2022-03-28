

 const express = require("express");

 const userController = require("./controllers/user.controller")

 const todoController = require("./controllers/user.controller")
const app = express();

app.use(express.json());

app.use("/users",userController)
app.use("todos", todoController)

   module.exports = app;