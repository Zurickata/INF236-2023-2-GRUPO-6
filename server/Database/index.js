const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://Jotsui:Anal1234@bd-proyecto.ykqp2xt.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("Conexión base de datos", conn.connection.host)

    } catch (error){
      console.log(error)  
    }

}

module.exports = db;