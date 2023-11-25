const mongoose = require("mongoose");

const userSchema = new  mongoose.Schema({
    rut:{
        type: String,
        required: true,
        trim: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('User', userSchema);