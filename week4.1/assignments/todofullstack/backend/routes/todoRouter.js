const express = require('express');
const userAuth = require("../middleware/auth");
const {Todo} = require("../database/db");
const todoPostSchema = require("../validations/todoSchemaValidation");

const router = express.Router();

router.use(userAuth);

router.get("/todos",async function(req, res){
    try{
        const todos = await Todo.find({userId: req.id});
        return res.status(200).json({
            todos
        });
    }catch(err){
        console.log("Error while getting the todos due to : " + err);
        return res.status(500).json({message: "Internal server issue"});
    }

})

router.get("/todo/:id", async function(req,res) {
    const {id} = req.params;
    try{
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }
        if(todo.userId != req.id){
            return res.status(403).json({message: "You are not authorized to access"});
        }
        return res.status(200).json({todo});
    }catch{
        console.log("Error while getting the todo due to : " + err);
        return res.status(500).json({message: "Internal server issue"});
    }
})

router.post("/todo", async function(req, res){
    const parsedData = todoPostSchema.safeParse(req.body);
    if(!parsedData.success){
        const errorMessages = (JSON.parse(parsedData.error.message).map(er => er.message));
        return res.status(422).json({error: errorMessages});
    }
    const {title, description} = req.body;

    try{
        await Todo.create({title, description, userId: req.id});
        return res.status(201).json({message: "Todo created successfully"});
    }catch(err){
        console.log("Error while creating the todo due to : " + err);
        return res.status(500).json({message: "Internal server issue"});
    }
})

router.put("/todo/:id", async function(req, res){
    const {title, description} = req.body;
    const {id} = req.params;

    try{
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        if(req.id != todo.userId){
            return res.status(403).json({message: "You are not authorized"});
        }
        await Todo.findByIdAndUpdate(id, {title, description}, {new: true})
        return res.status(200).json({message: "Todo updated successfully"});
    }catch(err){
        console.log("Error while updating Todo due to : " + err);
        return res.status(500).json({message: "Internal server issue"});
    }
})

router.delete("/todo/:id",async function (req, res){
    const {id} = req.params;
    try{
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }
        if(!todo.userId.equals(req.id)){
            return res.status(403).json({message: "You are not authorized to perform this action"});
        }
        await Todo.findByIdAndDelete(id);
        return res.status(200).json({message: "Todo deleted successfully"});
    }catch(err){
        console.log("Error while deleting the todo due to : " + err);
        return res.status(500).json({message: "Internal server issue"});
    }
})



module.exports = router;

