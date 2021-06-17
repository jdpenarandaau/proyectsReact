// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController')

//creaun usuario 


// Crea un usuario
// api/utih
router.post('/',
[
  check('email', 'Agrega un email válido').isEmail(),
  check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
],
authController.autenticarUsuario

);


module.exports = router;

 //   [
   //     check('email', 'Agrega un email válido').isEmail(),
     //   check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
   // ],
 // usuarioController.crearUsuario