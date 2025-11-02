// display.js
import { booksData, updateBook, displayedBooks } from "./loadBooks.js";

const bookGrid = document.querySelector(".book-grid");

export function displayBooks(newBooks = []) {
    if (!bookGrid) return;

    // Append new books to displayedBooks
    displayedBooks.push(...newBooks);

    bookGrid.innerHTML = ""; // Clear previous cards

    displayedBooks.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <div class="book-tittle" contenteditable="true" data-id="${book.id}" data-field="title">${book.title}</div>
            <div class="book-author" contenteditable="true" data-id="${book.id}" data-field="author">By: ${book.author}</div>
            <div class="book-info" contenteditable="true" data-id="${book.id}" data-field="popularity">Popularity: ${book.popularity}</div>
            <div class="book-date" contenteditable="true" data-id="${book.id}" data-field="published">Published: ${book.published}</div>
        `;

        bookGrid.appendChild(card);
    });

    enableEditing();
}

function enableEditing() {
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach(el => {
        el.addEventListener("blur", e => {
            const id = e.target.dataset.id;
            const field = e.target.dataset.field;
            let value = e.target.innerText;

            if (field === "author") value = value.replace(/^By:\s*/, "");
            if (field === "popularity") value = value.replace(/^Popularity:\s*/, "");
            if (field === "published") value = value.replace(/^Published:\s*/, "");

            updateBook(id, { [field]: value });
        });
    });
}



