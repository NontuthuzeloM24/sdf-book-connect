import { fetchBooks, booksData } from "./loadBooks.js";
import { displayBooks } from "./display.js";
import { setupGrid } from "./grid.js";
import { setupLoadMore } from "./loadMore.js";

document.addEventListener("DOMContentLoaded", async () => {
    await fetchBooks();           // fetch books from API or localStorage
    displayBooks(booksData);      // show books
    setupGrid();                  // handle responsive grid
    setupLoadMore();              // initialize load more functionality
});