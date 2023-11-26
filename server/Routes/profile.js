const express = require("express");
const sesion = require("../Controllers/session.js")
const autenticar = require("../middlewares/ValidarToken.js")

const router = express.Router();

router.post('/register', sesion.register);

router.post('/login', sesion.login);

router.post('/logout', sesion.logout);

router.get('/secretaria',autenticar, sesion.secretaria);

module.exports = router;