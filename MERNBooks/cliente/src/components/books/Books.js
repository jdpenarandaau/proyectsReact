import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Formulario";
import Book from "./Book";

function Books() {
  // books en local storage
  let booksIniciales = JSON.parse(localStorage.getItem("books"));
  if (!booksIniciales) {
    booksIniciales = [];
  }

  // Arreglo de books
  const [books, saveBooks] = useState(booksIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    //    let booksIniciales = JSON.parse(localStorage.getItem('books'));
    //    if(booksIniciales) {
    //      localStorage.setItem('books', JSON.stringify(books))
    //    } else {
    //      localStorage.setItem('books', JSON.stringify([]));
    //   }
  }, [books]);

  // Función que tome las books actuales y agregue la nueva
  const addBook = (book) => {
    saveBooks([...books, book]);
  };

  // Function that removes a book by its id
  const removeBook = (id) => {
    console.log("Eliminar");
    const newsBooks = books.filter((book) => book.id !== id);
    saveBooks(newsBooks);
  };

  // Mensaje condicional
  const titulo = books.length === 0 ? "No hay books" : "Administra tus books";

  return (
    <Fragment>
      <h1>book manager</h1>

      <div className="container">
        <div >
          <div >
            <Formulario addBook={addBook} />
          </div>
          <div >
            <h2>{titulo}</h2>
            {books.map((book) => (
              <Book key={book.id} book={book} removeBook={removeBook} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Books;
