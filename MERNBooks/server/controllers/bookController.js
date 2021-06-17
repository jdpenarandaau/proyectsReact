const Book = require("../models/Book");
const { validationResult } = require("Express-validator");

exports.createBook = async (req, res) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const book = new Book(req.body);

    book.userID = req.user.id;

    book.save();
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//obtiene todos los libros del usuario
exports.getBook = async (req, res) => {
  try {
    // console.log(req.user)
    const books = await Book.find({ user: req.user.userID }).sort({
      userID: -1,
    });

    console.log(books);
    res.json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//obtiene el libros del usuario por id
exports.getBookId = async (req, res) => {
  try {
    // revisar el ID
    let book = await Book.findById(req.params.id);

    // si el book existe o no
    if (!book) {
      return res.status(404).json({ msg: "Book no encontrado" });
    }

    // verificar el creador del book
    if (book.userID.toString() !== req.user.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    console.log(book);
    res.json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//obtiene el libros del usuario por year
exports.getBookYear = async (req, res) => {
  try {
    // console.log(req.user)
    const books = await Book.find({year:{$gt:req.params.year}}).sort({
      userID: -1,
    });

    console.log(books);
    res.json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//actualiza book

exports.updateBook = async (req, res) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer

  const { title } = req.body;
  const { author } = req.body;
  const { year } = req.body;
  const newBook = {};

  if (title) {
    newBook.title = title;
  }
  if (author) {
    newBook.author = author;
  }
  if (year) {
    newBook.year = year;
  }

  /*if(author){
        
    }

    if(year){
        
    }*/

  try {
    // revisar el ID
    let book = await Book.findById(req.params.id);

    // si el book existe o no
    if (!book) {
      return res.status(404).json({ msg: "Book no encontrado" });
    }

    // verificar el creador del book
    if (book.userID.toString() !== req.user.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    // actualizar
    book = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: newBook },
      { new: true }
    );

    res.json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }

  // Elimina un book por su id
};

exports.deleteBook = async (req, res) => {
  try {
    // revisar el ID
    let book = await Book.findById(req.params.id);

    // si el book existe o no
    if (!book) {
      return res.status(404).json({ msg: "Book no encontrado" });
    }

    // verificar el creador del book
    if (book.userID.toString() !== req.user.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    // Eliminar el Book
    await Book.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Book eliminado " });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
