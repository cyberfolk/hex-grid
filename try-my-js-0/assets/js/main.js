const SQRT3 = 1.7320;

const HEX_SIDE = 6;
const HEX_WIDTH = HEX_SIDE * 2;
const HEX_APOTHEM = HEX_SIDE * 0.5 * SQRT3;
const HEX_HEIGHT = HEX_APOTHEM * 2;
const QUADRANT_HEIGHT = HEX_HEIGHT * 5;
const QUADRANT_WIDTH = HEX_WIDTH * 4;

const HEX_P_CENTER = 50;
const HEX_P_X_SHIFT = 6.25;
const HEX_P_Y_SHIFT = 10;
/* SCALE_ REDUCTION_HEX and SCALE INCREASE QUADRANT work together 
 * SCALE_ REDUCTION_HEX: it Reduces the size of inner hexes, 
 *  so them come near and create a padding in the border of quadrant who contain them. 
 *  To do it this constant MODIFY the ancorage position of inner hexes 
 * SCALE INCREASE QUADRANT: Increase the size of the quadrant, 
 *  to create margin between the internal hexagons it contains. 
 *  This constant DON'T modify the ancorage position of inner hexes */
const HEX_SCALE_REDUCTION = 0.95;
const QUADRANT_SCALE_INCREASE = 1.1;
const HEX_P_X_ARRAY = [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3];
const HEX_P_Y_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];

const containerEl = document.querySelector(".container");

const quadrantElement = document.createElement("div");
quadrantElement.style.height = `${QUADRANT_HEIGHT * QUADRANT_SCALE_INCREASE}rem`;
quadrantElement.style.width = `${QUADRANT_WIDTH * QUADRANT_SCALE_INCREASE}rem`;
quadrantElement.classList.add("quadrant");

for (let i = 0; i < 19; i++) {
  const hexElement1 = document.createElement("div");
  hexElement1.classList.add("hex");
  hexElement1.style.top = HEX_P_CENTER + (HEX_P_Y_ARRAY[i] * HEX_P_Y_SHIFT) * HEX_SCALE_REDUCTION + "%";
  hexElement1.style.left = HEX_P_CENTER + (HEX_P_X_ARRAY[i] * HEX_P_X_SHIFT) * HEX_SCALE_REDUCTION + "%";
  hexElement1.innerText = i + 1;
  hexElement1.style.height = `${HEX_HEIGHT}rem`;
  hexElement1.style.width = `${HEX_WIDTH}rem`;
  console.log(hexElement1.getAttribute.width);

  quadrantElement.append(hexElement1);
}
containerEl.append(quadrantElement);
