const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // leer token
  const token = req.header("x-auth-token");

  //console.log(token);
  //revisar el token
  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const cifrado = jwt.verify(token, process.env.JWT_KEY);
    req.user = cifrado.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "token no valido" });
  }
};
