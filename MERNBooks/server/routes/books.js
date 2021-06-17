const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const auth = require("../middelware/auth");
const { check } = require("express-validator");

//api/book
router.post(
  "/",

  auth,
  [check("title", "The title is required").not().isEmpty()],

  bookController.createBook
);
//get books
router.get(
  "/",

  auth,

  bookController.getBook
);

//get books por id
router.get(
  "/:id",

  auth,

  bookController.getBookId
);


//get books por id
router.get(
  "/getbyyear/:year",

  auth,

  bookController.getBookYear
);

//actualizar

router.put(
  "/:id",
  auth,
  [check("title", "The title is required ").not().isEmpty()],
  bookController.updateBook
);

// Eliminar un Book
router.delete("/:id", auth, bookController.deleteBook);

module.exports = router;
