const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {userSignInSchema, userSignUpSchema} = require("../validations/userSchemaValidation");
const router = express.Router();
const {User} = require("../database/db");

router.post("/signup",async function(req, res) {
    const {email, username, password} = req.body;
    const parsedData = userSignUpSchema.safeParse(req.body);
    if(!parsedData.success){
        // const error = parsedData.error.message
        const errors = parsedData.error.issues.map(err => ({
            field: err.path.join("."),
            message: err.message
        }));
        return res.status(401).json({errors});
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    try{
        await User.create({
            email,
            username,
            password : hashedPassword
        })
        res.status(201).json({message: "User created"})
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error while creating User"
        })
    }
}) 

router.post("/signin",async function(req, res){
    const {email, password} = req.body;
    const parsedData = userSignInSchema.safeParse(req.body);

    if(!parsedData.success){
        const err = (JSON.parse(parsedData.error.message).map(er => er.message));
        return res.status(401).json({error: err});
    }

    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({message: "User not found"});
        }
        
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
            return res.status(401).json({message: "Invalid Username or Password"});
        }

        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET);
        return res.status(200).json({message: "You are in home page", token });
    }catch(err){
        return res.status(500).json({message: "Internal server error"});
    }

    
})

module.exports = router;