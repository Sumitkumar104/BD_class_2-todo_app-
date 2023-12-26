const express=require('express');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||4000;

// middelware is used to parse json request body.
// app.use(server.json());

// Now we map our application with route . 


// import todoroute 
const Todoroute=require("./routes/Todoroute");
app.use("/api/v1",Todoroute);


// start our server
app.listen(PORT,()=>{
    console.log(`your server will start at port ${PORT}`);
})

// conect to the database
const dbconnect=require("./config/database");
dbconnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1> welocome to my page</h1>`)
})
