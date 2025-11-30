require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/", todoRouter);

async function startServer(){
    try{
        await mongoose.connect("mongodb+srv://krishna:krish572@dbpractice.im8byly.mongodb.net/Todo-App");
        console.log("DB connection successful")
        app.listen(3000, function(){
            console.log("Server is listening on Port 3000");
        })
    }catch(err){
        console.log("DB connection failed due to " + err);
    }
}



startServer();