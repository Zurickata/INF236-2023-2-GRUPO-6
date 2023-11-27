const User = require("../Models/user.js")
const jwt = require("jsonwebtoken");  

const register = async(req, res) => {
    const {correo, password} = req.body
    try {
      const newUser = new User({
        correo,
        password,
      });
      const userSaved = await newUser.save();
      
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
  const {correo, password} = req.body
  console.log(correo,password)
  
  try {
    const userFound = await User.findOne({correo})
    if(!userFound) return res.status(400).json({message:" correo no encontrado"})

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
      res.json({token})
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

const secretaria = async(req , res) => {
  const userFound = await User.findById(req.user.id)

  if(!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    correo: userFound.correo,
  })


}
module.exports = { 
  "login": login,
  "register": register,
  "logout": logout,
  "secretaria" : secretaria
}