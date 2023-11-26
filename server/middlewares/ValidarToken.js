const jwt = require("jsonwebtoken");  

const autenticar = (req,res,next)=>{
    const {token} = req.cookies
    if(!token) return res.status(401).json({message: "no token, autorizacion deneganda"});

    jwt.verify(token,"secret123" ,(err,user) =>{
        if(err) res.status(401).json({message: "Invalid token"})

        req.user = user

        next();
    })



}

module.exports = autenticar;