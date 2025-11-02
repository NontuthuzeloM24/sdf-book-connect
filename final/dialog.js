import { booksData, saveBooks } from "./loadBooks.js";
import { displayBooks } from "./display.js";

export function openEditDialog(index) {
    const book = booksData[index];

    const title = prompt("Edit book title:", book.title);
    const author = prompt("Edit book author:", book.author);
    const popularity = prompt("Edit popularity:", book.popularity);
    const published = prompt("Edit published date:", book.published);

    if (title !== null) book.title = title;
    if (author !== null) book.author = author;
    if (popularity !== null) book.popularity = parseInt(popularity);
    if (published !== null) book.published = published;

    booksData[index] = book;
    saveBooks();
    displayBooks(booksData);
}

