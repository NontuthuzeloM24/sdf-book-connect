// grid.js
import { booksData } from "./loadBooks.js";

export const PAGE_SIZE = 4; // books per "Load More"
export let currentIndex = 0;

export function getNextBooks() {
    const nextBooks = booksData.slice(currentIndex, currentIndex + PAGE_SIZE);
    currentIndex += PAGE_SIZE;
    return nextBooks;
}

export function resetGrid() {
    currentIndex = 0;
}




