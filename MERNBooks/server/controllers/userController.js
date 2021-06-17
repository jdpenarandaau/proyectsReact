const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  //check for error

  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  //extract
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    user = new User(req.body);

    //console.log(req);

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    await user.save();
    //console.log(user);
    //usuario.save();
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
    res.status(400).send("Error");
  }
};
