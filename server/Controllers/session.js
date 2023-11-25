const User = require("../Models/user.js")
const jwt = require("jsonwebtoken");  

const register = async(req, res) => {
    const {rut, password} = req.body
    try {
      const newUser = new User({
        rut,
        password,
      });
      const userSaved = await newUser.save();

      res.json({
        message: "Usuario credo satisfactoriamente",
      })
      jwt.sign(
      {
        id:userSaved._id,
      },
      "secret123",
      {
      expiresIn: "1d",
      },
      (err,token) => {
        if(err) console.log(err)
        res.cookie('token',token);
        res.json({
          message: "Usuario credo satisfactoriamente",
        })
      }
      )
      


    } catch (error) {
      console.log(error)
      
    }


};

const login = async(req, res) => {
  const {rut, password} = req.body
  console.log(rut,password)
  
  try {
    const userFound = await User.findOne({rut})
    console.log(userFound.password)
    if(!userFound) return res.status(400).json({message:" rut no encontrado"})

    const passCorrect =  password == userFound.password
    if(!passCorrect) return res.status(400).json({message:" contrasena incorrecta"})

    jwt.sign(
    {
      id:userFound._id,
    },
    "secret123",
    {
    expiresIn: "1d",
    },
    (err,token) => {
      if(err) console.log(err)
      res.cookie('token',token);
      res.json({
        message: "Usuario credo satisfactoriamente",
      })
    }
    )
    


  } catch (error) {
    console.log(error)
    
  }

};

const logout = async(req, res) => {
  
  res.cookie("token", "",{
    expires: new Date(0)
    });
    return res.sendStatus(200);


}


module.exports = { 
  "login": login,
  "register": register,
  "logout": logout
}