const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  // extrar

  const { email, password } = req.body;

  try {
    //revisar usuario registrado

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: " El usuario no existe" });
    }


    const passCorrecto = await bcryptjs.compare(password,user.password);
    if(!passCorrecto){
        return res.status(400).json({msg: 'password incorrecto'})
    }

    // wst

    const payload = {
        user: {
            id: user.id
        }
    };
  
      // firmar jwt
  
      jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: 3600 // 1 hora
    }, (error, token) => {
        if(error) throw error;
  
        // Mensaje de confirmación
        res.json({ token  });
    });

  } catch (error) {
    console.log(error);
  }
};
