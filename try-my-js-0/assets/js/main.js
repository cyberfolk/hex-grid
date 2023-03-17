const CENTER = 50;
const X_SHIFT = 6.25;
const Y_SHIFT = 10;
const X_ARRAY = [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3];
const Y_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];

const containerEl = document.querySelector(".container");

const quadrantElement = document.createElement("div");
const quadrantBorderElement = document.createElement("div");
quadrantElement.classList.add("quadrant");
quadrantBorderElement.classList.add("quadrant_border");

for (let i = 0; i < 19; i++) {
  const hexElement1 = document.createElement("div");
  hexElement1.classList.add("hex");
  hexElement1.style.top = CENTER + Y_ARRAY[i] * Y_SHIFT + "%";
  hexElement1.style.left = CENTER + X_ARRAY[i] * X_SHIFT + "%";
  hexElement1.innerText = i + 1;
  quadrantElement.append(hexElement1);
}
quadrantBorderElement.append(quadrantElement);
containerEl.append(quadrantBorderElement);
