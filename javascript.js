const container = document.querySelector(".container");
const button = document.querySelector(".button");

function randomValue() {
    return Math.floor(Math.random() * 256);
}

function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        container.appendChild(grid);

        grid.addEventListener("mouseover", function() {
            const r = randomValue();
            const g = randomValue();
            const b = randomValue();
            grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
}

function clearGrid() {
    container.innerHTML = "";
}

button.addEventListener("click", function() {
    let input = prompt("How many squares per side? (max 100)");
    let size = Number(input);

    if (!input || isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    clearGrid();
    createGrid(size);
});

createGrid(16);