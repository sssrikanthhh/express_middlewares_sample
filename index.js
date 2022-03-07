const express = require('express');

let app = express();
let PORT = 8000;

// routes

app.get('/books', allBooks, (req, res) => {
  res.send("Fetching all books");
});

app.get('/book/:name', singleBook, (req, res) => {
  res.send({ bookName: req.name });
});

// middlewares

function allBooks(req, res, next) {
  console.log("Fetching all books");
  next();
}

function singleBook(req, res, next) {
  let nameOfBook = req.params.name;
  req.name = nameOfBook;
  next();
}

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
