// 1.Importing
const express = require("express");
const empModel = require('./model/model');
const cors = require('cors');
// 2.Initialization
const app = new express();

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

// 3.API Creation
// app.get(url,callback)
app.get('/',(req,res)=>{
    res.send("hi ")
})

app.get('/about',(req,res)=>{
    res.send("About page")
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})
// adding data to db

app.post('/new',(req,res)=>{
    console.log(req.body)
    new empModel(req.body).save();
    res.send("data added to db");
})
// get
app.get('/view',async(req,res)=>{
    var data = await empModel.find();
    res.send(data);
})



// delete
app.delete('/remove/:id',async(req,res)=>{
    let id = req.params.id
   await empModel.findByIdAndDelete(id)
    res.send("data deleted")
})

// update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    console.log("update:",req.body)
   await empModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")
})









// Port 
app.listen(3006,(req,res)=>{
    console.log("Port is running in 3006")
})