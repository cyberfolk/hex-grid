const CENTER = 50;
const X_SHIFT = 12.5;
const Y_SHIFT = 18.75;
const X_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];
const Y_ARRAY = [0, 0, 1, 1, 0, -1, -1, 0, 1, 2, 2, 2, 1, 0, -1, -2, -2, -2, -1];

const containerEl = document.querySelector(".container");

const qhexElement = document.createElement("div");
qhexElement.classList.add("qhex");

for (let i = 0; i < 19; i++) {
  const hexElement1 = document.createElement("div");
  hexElement1.classList.add("hex");
  hexElement1.style.top = CENTER + X_ARRAY[i] * X_SHIFT + "%";
  hexElement1.style.left = CENTER + Y_ARRAY[i] * Y_SHIFT + "%";
  hexElement1.innerText = i + 1;
  qhexElement.append(hexElement1);
}

containerEl.append(qhexElement);
