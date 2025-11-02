// loadBooks.js
export let booksData = [];
export let displayedBooks = [];

const API_URL = "https://book-connect-api.vercel.app/books";

export async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch API data");
        const data = await response.json();

        if (!Array.isArray(data)) throw new Error("API did not return an array");

        booksData = data;
        displayedBooks = []; // reset displayed books for pagination
        saveBooks();
    } catch (err) {
        console.error("Error fetching books:", err);
        booksData = [];
    }
}

export function saveBooks() {
    localStorage.setItem("booksData", JSON.stringify(booksData));
}

export function loadFromLocal() {
    const saved = localStorage.getItem("booksData");
    if (saved) booksData = JSON.parse(saved);
}

export function updateBook(id, updatedData) {
    const index = booksData.findIndex(book => book.id === id);
    if (index !== -1) {
        booksData[index] = { ...booksData[index], ...updatedData };
        saveBooks();
    }
}

