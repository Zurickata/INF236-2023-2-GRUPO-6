const express = require("express");
const sesion = require("../Controllers/pacientes.js")
const autenticar = require("../middlewares/ValidarToken.js")

const router = express.Router();

router.post('/hora', autenticar ,sesion.asignarHora);

router.get('/hora/:rut', sesion.buscarHoras);

router.get('/horas/:fecha' , sesion.horasDias);

router.delete('/hora/:id',autenticar, sesion.eliminarHora);

router.put('/hora/:id',autenticar, sesion.modificarHoras);

module.exports = router;