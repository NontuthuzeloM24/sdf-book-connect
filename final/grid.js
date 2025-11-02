export function setupGrid() {
    const grid = document.querySelector(".book-grid");
    if (!grid) return;

    function adjustGrid() {
        if (window.innerWidth <= 768) {
            grid.style.gridTemplateColumns = "1fr 1fr";
        } else {
            grid.style.gridTemplateColumns = "repeat(4, 1fr)";
        }
    }

    window.addEventListener("resize", adjustGrid);
    adjustGrid();
}

