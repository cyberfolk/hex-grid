import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loaded_hex_macro: false,
    API_URL_BASE: "http://127.0.0.1:8069/",
    API_HEX_MACRO: "api/hex_macro",
    hex_macro: null,

    POSITION: {
        "X": [0, 0, 18.75, 18.75, 0, -18.75, -18.75, 0, 18.75, 37.5, 37.5, 37.5, 18.75, 0, -18.75, -37.5, -37.5, -37.5, -18.75],
        "Y": [0, -20, -10, 10, 20, 10, -10, -40, -30, -20, 0, 20, 30, 40, 30, 20, 0, -20, -30]
    },

    async fetchHexMacro(url) {
        try {
            const response = await axios.get(url);
            this.hex_macro = response.data;
            this.loaded_hex_macro = true;
        } catch (error) {
            this.error = error.message;
        }
    },

    getHexStyle(hex) {
        const posY = 50 + this.POSITION.Y[hex.index - 1] + "%";
        const posX = 50 + this.POSITION.X[hex.index - 1] + "%";
        const brightness = 120 - 3 * hex.index;
        return `top: ${posY}; left: ${posX}; filter: brightness(${brightness}%);`
    },

    getQuadStyle(quad) {
        const posY = 50 + this.POSITION.Y[quad.index - 1] + "%";
        const posX = 50 + this.POSITION.X[quad.index - 1] + "%";
        return `top: ${posY}; left: ${posX}; z-index: ${20 - quad.index}; clip-path: ${quad.polygon};`
    },

    getQuadrant_ids() {
        return this.hex_macro.quadrant_ids;
    },

    getHex_ids(quad) {
        return quad.hex_ids;
    },
});