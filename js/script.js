const container = document.querySelector(".container");
container.style.border = "1px solid black";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexDirection = "column";

for (let i = 0; i < 16; i++) {
  const outer = document.createElement("div");
  outer.style.border = "1px solid red";
  outer.style.display = "flex";
  outer.style.flex = "1";

  for (let j = 0; j < 16; j++) {
    const inner = document.createElement("div");
    inner.style.border = "1px solid yellow";
    inner.style.flex = "1";

    inner.addEventListener("mouseenter", () => {
      inner.style.backgroundColor = "orange";
    });

    outer.appendChild(inner);
  }

  container.appendChild(outer);
}