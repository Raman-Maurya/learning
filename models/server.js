const express = require('express');
const app = express();

const connectDB = require('../config/database');
const User = require('./user')


app.use(express.json()); 
// app.use("/", (req,res)=>{
//     res.send("Hello World");
// })

app.post("/user", async(req,res)=>{
    const myuser = new User({
        name: "Raman",
        lname: "Maurya",
        age: 19,
    });
    try{
    await myuser.save();
    res.send("Data save to database");
}catch{
    res.status(500).send("Internal server error");
}
})
connectDB().then(()=>{
    console.log("Connected to database");
    app.listen(7778, ()=>{
        console.log("Server is running on port 7777");
    })
}).catch((err)=>{
    console.log(err);
})

app.post("/uservh", (req,res)=>{
    const{name, age} = req.body;    //extract data from request body
     res.send(`Hello ${name} your age is ${age}`);
     console.log(`Hello ${name} your age is ${age}`);
})
app.get("/user/:id/:name", (req,res)=>{
    res.send("Hello user");
    console.log(req.params.id);
    console.log(req.params.name);
})
