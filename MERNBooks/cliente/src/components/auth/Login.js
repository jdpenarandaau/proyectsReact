import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State for log in
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  //extract user

  const { email, password } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //when user wants to login
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-user">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
          <did className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              value={email}
              onChange={onChange}
            />
          </did>

          <did className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="pasword"
              name="password"
              placeholder="your password"
              value={password}
              onChange={onChange}
            />
          </did>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="log in"
            />
          </div>
        </form>
        <Link to={"/new-count"} className="enlace-cuenta">
          get account
        </Link>
      </div>
    </div>
  );
};

export default Login;
