import { booksData, saveBooks } from "./loadBooks.js";
import { openEditDialog } from "./dialog.js";

export function displayBooks(bookArray) {
    const grid = document.querySelector(".book-grid");
    if (!grid) return;

    grid.innerHTML = "";

    bookArray.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-tittle">${book.title}</div>
            <div class="book-author">By: ${book.author}</div>
            <div class="book-info">Popularity: ${book.popularity}</div>
            <div class="book-date">Published: ${book.published}</div>
            <button class="edit-btn" data-index="${index}">Edit</button>
        `;
        grid.appendChild(card);
    });

    // Add event listeners for edit buttons
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            openEditDialog(idx);
        });
    });
}

