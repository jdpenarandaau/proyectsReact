import React from "react";

const Book = ({ book }) => {
  return (
    




<li className="tarea sombra">
            <p>{book.nombre} </p>

      
            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
//onClick={() => seleccionarTarea(tarea) }
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
//onClick={() => tareaEliminar(tarea._id)}
                >Eliminar</button>
            </div>
        </li>

  );
};

export default Book;
