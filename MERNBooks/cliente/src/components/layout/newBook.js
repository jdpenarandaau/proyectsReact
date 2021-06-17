import React, { Fragment } from "react";

const newBook = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-primario btn-block">
        New book
      </button>
      <form className="formulario-nuevo-proyecto">
        <input type="text" className="input-text" />
      </form>
    </Fragment>
  );
};

export default newBook;
