const express =require("express");

const connect = require("./src/config/config/db");


const app = express();

app.use(express.json())


const userController = require("./src/config/controller/user.controller");
const bookController = require("./src/config/controller/book.controller")
const publicationController = require("./src/config/controller/publication.controller");
const commentController = require("./src/config/controller/comment.controller")


app.use("/user",userController);
app.use("/book",bookController);
app.use("/publication",publicationController);
app.use("/comment",commentController)


app.listen(5000, async ()=>{
    try {
        await connect();
        console.log("listen to the port 5000")
    } catch (error) {
        console.log(error)
    }
})