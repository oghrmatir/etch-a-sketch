const container = document.querySelector(".container");
container.style.border = "1px solid orange";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexDirection = "column";

function createGrid(gridSize) {
  container.textContent = "";

  for (let i = 0; i < gridSize; i++) {
    const outer = document.createElement("div");
    outer.style.display = "flex";
    outer.style.flex = "1";
  
    for (let j = 0; j < gridSize; j++) {
      const inner = document.createElement("div");
      inner.style.border = "1px solid white";
      inner.style.flex = "1";
  
      inner.addEventListener("mouseenter", () => {
        inner.style.backgroundColor = "orange";
      });
  
      outer.appendChild(inner);
    }
  
    container.appendChild(outer);
  }
}

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let gridSize = 0;
  while (true) {
    gridSize = +prompt("Enter a new size for the grid: ", 16);
    if (gridSize < 100) {
      break;
    }
  }
  createGrid(gridSize);
});

const DEFAULT_SIZE = 16;

createGrid(gridSize = DEFAULT_SIZE);