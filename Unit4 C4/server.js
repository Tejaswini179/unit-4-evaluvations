

  const app = require("./src/index");

  const connect = require("./src/config/db");


  app.listen(5000, async ()=>{
      try {
          await connect();
      } catch (error) {
          console.log(error.message)
      }
      console.log("listening to port 5000")
  })