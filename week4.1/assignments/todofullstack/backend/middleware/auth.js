const jwt = require("jsonwebtoken");

async function auth(req, res, next){
    const authorization = req.headers["authorization"];
    if(!authorization){
        return res.status(401).json("Authorization header is required");
    }
    const token = authorization.split(" ")[1];
    if(!token){
        return res.status(401).json("token should be passed in authorization header");
    }
    try{
        const userInfo = await jwt.verify(token, process.env.JWT_SECRET);
        if(!userInfo){
            return res.status(401).json({message: "Unauthorized"});
        }
        const {id} = userInfo;
        req.id = id;
        next();
    }catch(err){
        console.log("Error in auth middleware due to : "+ err);
        return res.status(500).json({message: "Internal server issue"});
    }
}

module.exports = auth;