const mongoose = require("mongoose");

const userSchema = new  mongoose.Schema({
    correo:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Por favor, introduce un correo electrónico válido']
    },
    password:{
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('User', userSchema);