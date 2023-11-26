const paciente = require("../Models/paciente.js")


const asignarHora = async(req, res) => {
    const {rut,telefono,fecha,hora,correo} = req.body

    const newpaciente = new paciente({
        rut,
        telefono,
        fecha,
        hora,
        correo
    })
    const pacienteguardado = await newpaciente.save();
    res.json(pacienteguardado)
};

const buscarHoras = async(req, res) => {
    try {
    rut =  req.params.rut

    const horasPaciente = await paciente.find({ rut  });
    if (horasPaciente.length > 0) {
        res.json(horasPaciente); // Enviar la lista de usuarios encontrados como respuesta
      } else {
        res.status(404).json({ message: 'No se encontraron usuarios con ese RUT.' });
      }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar usuarios por RUT.' });
      }
};
const eliminarHora = async(req, res) => {
    const hora = await paciente.findByIdAndDelete(req.params.id)
    if(!hora) return res.status(404).json({message: "tarea no encontrada"})
    return res.sendStatus(204);

};
const modificarHoras = async(req, res) => {
    const hora = await paciente.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    if(!hora) return res.status(404).json({message: "tarea no encontrada"})
    res.json(hora)

};

module.exports = { 
    "asignarHora": asignarHora,
    "buscarHoras": buscarHoras,
    "eliminarHora": eliminarHora,
    "modificarHoras" : modificarHoras
  }