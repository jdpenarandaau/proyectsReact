// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
//creaun usuario 

//api/users


const userController = require('../controllers/userController');
//const { check } = require('express-validator');

// Crea un usuario
// api/user
router.post('/',
[
  check('name', 'The name is required').not().isEmpty(),
  check('email', 'Add a valid email').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({ min: 6})
],
 userController.createUser
);


module.exports = router;

