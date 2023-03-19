const HEX_WIDTH = 12;
const HEX_HEIGHT = HEX_WIDTH * 0.5 * Math.sqrt(3);

/* HEX_REDUCTION and QUAD_INCREASE work together 
 * HEX_REDUCTION: Reduces the size of inner hexes, 
 *  so them come near and create a padding in the border of quadrant who contain them. 
 *  To do it, this constant MODIFY the ancorage position of inner hexes 
 * QUAD_INCREASE: Increase the size of the quadrant, 
 *  to create margin between the internal hexagons it contains. 
 *  This constant DON'T modify the ancorage position of inner hexes */
const HEX_REDUCTION = 0.95;
const QUAD_INCREASE = 1.1;

const containerEl = document.querySelector(".container");
const el_quadrant = createQuadrant(QUAD_INCREASE, HEX_HEIGHT, HEX_WIDTH);

/* ===== MAIN ================================================================= */
popolateQuadrant(el_quadrant, HEX_REDUCTION, HEX_HEIGHT, HEX_WIDTH);
containerEl.append(el_quadrant);

/* ===== FUNCTION ================================================================= */
function popolateQuadrant(el_quadrant, HEX_REDUCTION, HEX_HEIGHT, HEX_WIDTH) {
  for (let i = 0; i < 19; i++) {
    const el_hex = createHex(i, HEX_REDUCTION, HEX_HEIGHT, HEX_WIDTH);
    el_quadrant.append(el_hex);
  }
}

function createQuadrant(QUAD_INCREASE, HEX_HEIGHT, HEX_WIDTH) {
  const QUAD_HEIGHT = HEX_HEIGHT * 5;
  const QUAD_WIDTH = HEX_WIDTH * 4;
  const el_quadrant = document.createElement("div");
  el_quadrant.style.height = `${QUAD_HEIGHT * QUAD_INCREASE}rem`;
  el_quadrant.style.width = `${QUAD_WIDTH * QUAD_INCREASE}rem`;
  el_quadrant.classList.add("quadrant");
  return el_quadrant;
}

function createHex(i, HEX_REDUCTION, HEX_HEIGHT, HEX_WIDTH) {
  const CENTER = 50;
  const X_SHIFT = 6.25;
  const Y_SHIFT = 10;
  const X_ARRAY = [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3];
  const Y_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];
  const el_hex = document.createElement("div");
  el_hex.classList.add("hex");
  el_hex.style.top = CENTER + (Y_ARRAY[i] * Y_SHIFT) * HEX_REDUCTION + "%";
  el_hex.style.left = CENTER + (X_ARRAY[i] * X_SHIFT) * HEX_REDUCTION + "%";
  el_hex.innerText = i + 1;
  el_hex.style.height = `${HEX_HEIGHT}rem`;
  el_hex.style.width = `${HEX_WIDTH}rem`;
  return el_hex;
}
