const container = document.querySelector(".container");
container.style.border = "1px solid orange";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexDirection = "column";

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomizeColor(e) {
  const red = getRandomIntInclusive(0, 255);
  const green = getRandomIntInclusive(0, 255);
  const blue = getRandomIntInclusive(0, 255);
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function darkeningColor(e) {
  let opacity = window.getComputedStyle(e.target).opacity;
  if (opacity > 0) {
    opacity -= 0.1;
  }
  e.target.style.opacity = opacity;
  console.log(e.target.style.opacity);
}

function createGrid(gridSize) {
  container.textContent = "";

  for (let i = 0; i < gridSize; i++) {
    const outer = document.createElement("div");
    outer.style.display = "flex";
    outer.style.flex = "1";
    outer.style.backgroundColor = "black";

    for (let j = 0; j < gridSize; j++) {
      const inner = document.createElement("div");
      inner.style.border = "1px solid white";
      inner.style.flex = "1";
      inner.style.backgroundColor = "white";
  
      inner.addEventListener("mouseenter", function (e) {
        if (randomize.checked === true) {
          randomizeColor(e);
        } else {
          inner.style.backgroundColor = "orange";
        }

        if (darkening.checked === true) {
          darkeningColor(e);
        }
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

const randomize = document.querySelector("#randomize");
const darkening = document.querySelector("#darkening");