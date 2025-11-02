// loadMore.js
import { getNextBooks } from "./grid.js";
import { displayBooks } from "./display.js";

export function loadMoreBooks() {
    const nextBooks = getNextBooks();
    if (nextBooks.length === 0) {
        alert("No more books to load.");
        return;
    }
    displayBooks(nextBooks);
}




