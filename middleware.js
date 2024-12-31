const express = require('express');
const app = express();



app.get("/user", (req,res,next)=>{
    console.log("First middleware");
     res.send("Hello user");
    next();
}, (req, res)=>{
    res.send("Hello user 2");
}).listen(7777, ()=>{
    console.log("Server is running on port 7777");
})