import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Formulario = ({ addBook }) => {
  // create state of books
  const [book, actualizarBook] = useState({
    title: "",
    author: "",
    year: "",
  });
  const [error, actualizarError] = useState(false);

  // Function that is executed every time the user writes in an input
  const actualizarState = (e) => {
    //console.log(e.target.value);
    actualizarBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // Extract the values
  const { title, author, year } = book;

  // when the user presses add book
  const submitBook = (e) => {
    e.preventDefault();

    // Validation
    if (title.trim() === "" || author.trim() === "" || year.trim() === "") {
      //console.log('error');
      actualizarError(true);
      return;
    }
    // Delete the previous message
    //actualizarError(false);

    // Asignar un ID
    book.id = uuid();
    console.log(book);
    // Crear la book
    addBook(book);

    // Reiniciar el form
    actualizarBook({
      title: "",
      author: "",
      year: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Book</h2>

      {error ? <p >ALL FIELDS ARE REQUIRED</p> : null}

      <form onSubmit={submitBook}>
        <label>Title of the book</label>
        <input
          type="text"
          name="title"
         
          placeholder="title"
          onChange={actualizarState}
          value={title}
        />

        <label>Author of the book</label>
        <input
          type="text"
          name="author"
         
          placeholder="author"
          onChange={actualizarState}
          value={author}
        />

        <label>Year it was published</label>
        <input
          type="number"
          min="1900"
          max="2099"
          step="1"
          value="2021"
          name="year"
        
          onChange={actualizarState}
          value={year}
        />

        <button type="submit" >
          Agregar Book
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearBook: PropTypes.func.isRequired,
};

export default Formulario;
