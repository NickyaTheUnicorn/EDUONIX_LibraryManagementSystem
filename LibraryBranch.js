// Renner Yannick
class LibraryBranch {
    
    constructor(name, books, authors, numberOfBooks, genres) {
        this.name = name;
        this.books = books;
        this.authors = authors;
        this.numberOfBooks = numberOfBooks;
        this.genres = genres;
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

    getNumebrOfBooks() {
        return this.numberOfBooks;
    }

    getGenres() {
        return this.genres;
    }

    addBook(book) {
        this.books.push(book);
        this.numberOfBooks++;
    }

    addGenre(genre) {
        this.genres.push(genre);
    }
}