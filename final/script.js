// script.js
import { fetchBooks, loadFromLocal } from "./loadBooks.js";
import { displayBooks } from "./display.js";
import { loadMoreBooks } from "./loadMore.js";
import { resetGrid, getNextBooks } from "./grid.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Load from localStorage first for speed
    loadFromLocal();

    // Fetch from API to update data
    await fetchBooks();

    // Reset pagination
    resetGrid();

    // Load first batch of books
    const firstBatch = getNextBooks();
    displayBooks(firstBatch);

    // Load more button
    const loadMoreBtn = document.querySelector("#loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            loadMoreBooks();
        });
    }
});


