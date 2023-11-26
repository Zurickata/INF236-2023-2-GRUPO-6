const mongoose = require("mongoose");

const pacienteSchema = new  mongoose.Schema({
    rut:{
        type: String,
        required: true,
        trim: true,
    },
    telefono:{
        type: String,
        required: true,
        match: [ /^(\+569\s?)([0-9]{8})$/, 'Por favor, introduce un correo electrónico válido']
    },
    fecha:{
        type: Date,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        lowercase: true,
        // Validar el formato del correo electrónico usando una expresión regular
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Por favor, introduce un correo electrónico válido']
    }
}, {
    timestamps: true

});

module.exports = mongoose.model('paciente', pacienteSchema);