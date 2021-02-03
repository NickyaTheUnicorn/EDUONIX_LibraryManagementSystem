// Renner Yannick
class Book {

    constructor(ean, bookNumber, authors, libraryBranch, genres, publisher, nbOfPages, language, versionNumber, isPresent)
    {
        this.ean = ean;
        this.bookNumber = bookNumber;
        this.authors = authors;
        this.libraryBranch = libraryBranch;
        this.genres = genres;
        this.publisher = publisher;
        this.nbOfPages = nbOfPages;
        this.language = language;
        this.versionNumber = versionNumber;
        this.isPresent = isPresent;
    }


    getEan() {
        return this.ean;
    }

    getBookNumber() {
        return this.bookNumber;
    }

    getAuthor() {
        return this.author;
    }

    getLibraryBranch() {
        return this.libraryBranch;
    }

    getGenres() {
        return this.genres;
    }

    getPublisher() {
        return this.publisher;
    }

    getNumberOfPages() {
        return this.nbOfPages;
    }

    getLanaguage() {
        return this.language;
    }

    getVersionNumber() {
        return this.versionNumber;
    }

    checkPresence() {
        return this.isPresent;
    }

    loan() {
        if (this.isPresent === true) {
            this.isPresent = false;
        }
    }

    restituition() {
        if (this.isPresent === false) {
            this.isPresent = true;
        }
    }

    addAuthor(author) {
        this.authors.push(author);
    }

    removeAuthor(author) {
        this.authors.pop(author);
    }

    addGenre(genre) {
        this.genres.push(genre);
    }

    removeGenre(genre) {
        this.genres.pop(genre);
    }

    setNewBracnch(newBranch) {
        this.libraryBranch = newBranch;
    }

}