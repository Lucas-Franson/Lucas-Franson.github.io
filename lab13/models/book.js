
const books = [
    { id: 1, title: 'Book 1', ISBN: '123456', publishedDate: '2020-01-01', author: 'Author 1' }
];

module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getById(id) {
        return books.find(book => book.id == id);
    }

    save() {
        this.id = books
            .map(book => book.id)
            .reduce((a, b) => Math.max(a, b)) + 1;
        books.push(this);
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id == id);

        if (index > -1) {
            books.splice(index, 1);
        } else {
            throw new Error('Not found');
        }
    }

    updateById(id) {
        const index = books.findIndex(book => book.id == id);

        if (index > -1) {
            books[index] = this;
        } else {
            throw new Error('Not found');
        }
    }

}