import React from 'react';
import Book from './Book';

const ListBook = () => {

    
   const books=[{nombre:'hola', estado: true},
        {nombre:'sdasdsssa', estado: true},
        {nombre:'sdaqsssda', estado: true},
        {nombre:'qqqqqq', estado: true}]

        return (
            <ul className='listado_proyectos' >
                 {books.map(
                     book=>(<Book book={book}/>)
                 )}
            </ul>    
        );

}

export default ListBook;
