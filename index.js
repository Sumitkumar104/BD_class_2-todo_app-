const express=require("express");  // Require is used to import the express
const app= express();

app.listen(3100,()=>{console.log("your server is successfully running at port 3100")});
app.get("/",(req,res)=>{res.send(" helo in gettttas page")});


