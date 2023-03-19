const HEX_WIDTH = 4;
const HEX_HEIGHT = HEX_WIDTH * 0.5 * Math.sqrt(3);
const HEX_PADDING = 0.1;
const QUAD_PADDING = 0.09;
/* QUAD_PADDING goes from 0 to HEX_PADDING
 * QUAD_PADDING = 0 --> means no QUAD_PADDING
 * QUAD_PADDING = HEX_PADDING --> means no HEX_PADDING */

const containerEl = document.querySelector(".container");
const el_quadrant = createQuadrant(HEX_HEIGHT, HEX_WIDTH);

/* ===== MAIN ================================================================= */
const el_macroArea = createMacroarea(HEX_HEIGHT, HEX_WIDTH);
popolateMacroarea(el_macroArea);
containerEl.append(el_macroArea);

/* ===== FUNCTION ================================================================= */
function createMacroarea() {
  const MA_WDITH = HEX_WIDTH * 16;
  const MA_HEIGHT = HEX_HEIGHT * 20;
  const el_macroArea = document.createElement("div");
  el_macroArea.style.height = `${MA_HEIGHT}rem`;
  el_macroArea.style.width = `${MA_WDITH}rem`;
  el_macroArea.classList.add("macro_area");
  return el_macroArea;
}

function popolateMacroarea(el_macroArea) {
  for (let i = 0; i < 19; i++) {
    const el_quadrant = createQuadrant(i);
    popolateQuadrant(el_quadrant, i)
    el_macroArea.append(el_quadrant);
  }
}

function createQuadrant(i) {
  const QUAD_SHIFT_REDUCTION = 1 - QUAD_PADDING / 2;
  const QUAD_HEIGHT = HEX_HEIGHT * 5;
  const QUAD_WIDTH = HEX_WIDTH * 4;
  const CENTER = 50;
  const X_SHIFT = 6.25;
  const Y_SHIFT = 10;
  const X_ARRAY = [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3];
  const Y_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];
  const el_quadrant = document.createElement("div");
  el_quadrant.classList.add("quadrant");
  el_quadrant.style.top = CENTER + (Y_ARRAY[i] * Y_SHIFT) * QUAD_SHIFT_REDUCTION + "%";
  el_quadrant.style.left = CENTER + (X_ARRAY[i] * X_SHIFT) * QUAD_SHIFT_REDUCTION + "%";
  el_quadrant.style.height = `${QUAD_HEIGHT}rem`;
  el_quadrant.style.width = `${QUAD_WIDTH}rem`;
  return el_quadrant;
}

function popolateQuadrant(el_quadrant, quad_index) {
  for (let i = 0; i < 19; i++) {
    const el_hex = createHex(quad_index, i);
    el_quadrant.append(el_hex);
  }
}

function createHex(quad_index, hex_index) {
  const HEX_SHIFT_REDUCTION = 1 - QUAD_PADDING;
  const HEX_REDUCTION = 1 - HEX_PADDING;
  const CENTER = 50;
  const X_SHIFT = 6.25;
  const Y_SHIFT = 10;
  const X_ARRAY = [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3];
  const Y_ARRAY = [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3];
  const j = quad_index;
  const i = hex_index;
  const el_hex = document.createElement("div");
  el_hex.classList.add("hex");
  el_hex.style.top = CENTER + (Y_ARRAY[i] * Y_SHIFT) * HEX_SHIFT_REDUCTION + "%";
  el_hex.style.left = CENTER + (X_ARRAY[i] * X_SHIFT) * HEX_SHIFT_REDUCTION + "%";
  el_hex.innerText = `${j + 1}.${i + 1}`;
  el_hex.style.height = `${HEX_HEIGHT * HEX_REDUCTION}rem`;
  el_hex.style.width = `${HEX_WIDTH * HEX_REDUCTION}rem`;
  return el_hex;
}
