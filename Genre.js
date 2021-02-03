class Genre {
    constructor(name, books, authors) {
        this.name = name;
        this.books = books;
        this.authors = authors;
    }

    getName() {
        return this.name;
    }

    getBooks() {
        return this.books;
    }

    getAuthors() {
        return this.authors;
    }

    addBook(book) {
        this.books.push(book);
    }

    addAuthor(author) {
        this.authors.push(author);
    }
}