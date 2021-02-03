// Renner Yannick
class Author {
    constructor(firstName, lastName, birthday, books, numberOfBooks, primaryLanguage, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.books = books;
        this.numberOfBooks = numberOfBooks;
        this.primaryLanguage = primaryLanguage;
        this.nationality = nationality;
    }

    getName() {
        return this.firstName + " " + this.lastName;
    }

    getBirthday() {
        return this.birthday;
    }

    getBooks() {
        return this.books;
    }

    getNumberOfBooks() {
        return this.numberOfBooks;
    }

    getPrimaryLanguage() {
        return this.primaryLanguage;
    }

    getNationality() {
        return this.nationality;
    }

    addBook(book) {
        this.books.push(book);
        this.numberOfBooks++;
    }
}