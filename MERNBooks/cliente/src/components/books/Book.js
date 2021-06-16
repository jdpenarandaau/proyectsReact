import React from 'react';
import PropTypes from 'prop-types';


const Book = ({book, removeBook}) => ( 
    <div>
        <p>Title: <span>{book.title}</span> </p>
        <p>Author: <span>{book.author}</span> </p>
        <p>Year: <span>{book.year}</span> </p>
        

        <button
            
            onClick={ () => removeBook(book.id)  }
        >Eliminar &times;</button>
    </div>
);

Book.propTypes = {
    book: PropTypes.object.isRequired,
    eliminarBook: PropTypes.func.isRequired
}
 
export default Book;
