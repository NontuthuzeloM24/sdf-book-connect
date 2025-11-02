import { booksData } from "./loadBooks.js";
import { displayBooks } from "./display.js";

let booksPerPage = 4;
let currentPage = 1;

export function setupLoadMore() {
    const loadMoreBtn = document.querySelector("#loadMoreBtn");
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", () => {
        currentPage++;
        loadVisibleBooks();
    });

    loadVisibleBooks(); // initial load
}

function loadVisibleBooks() {
    const end = currentPage * booksPerPage;
    const visibleBooks = booksData.slice(0, end);
    displayBooks(visibleBooks);
}

