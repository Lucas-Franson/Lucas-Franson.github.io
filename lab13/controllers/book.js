const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.json(Book.getAll());
};

exports.getBook = (req, res, next) => {
    const id = req.params.id;
    res.json(Book.getById(id));
}

exports.createBook = (req, res, next) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const book = new Book(null, title, ISBN, publishedDate, author);
    res.json(book.save());
}

exports.updateBook = (req, res, next) => {
    const id = req.params.id;
    const { title, ISBN, publishedDate, author } = req.body;
    const book = new Book(id, title, ISBN, publishedDate, author);
    res.json(book.updateById(id));
}

exports.deleteBook = (req, res, next) => {
    const id = req.params.id;
    res.json(Book.deleteById(id));
}