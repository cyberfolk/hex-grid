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
            console.log(response.data);
        } catch (error) {
            this.error = error.message;
        }
    },

    getAxes(index) {
        const REDUCTION = 0.95;
        // REDUCTION is a constant used to bring the HEX closer to the center of the QUADRANT.
        // In this way we have the perception that the padding of the QUADRANTS increases
        const asse_y = 50 + this.POSITION.Y[index - 1] * REDUCTION + "%";
        const asse_x = 50 + this.POSITION.X[index - 1] * REDUCTION + "%";
        return `top: ${asse_y}; left: ${asse_x};`
    },

    getHexStyle(index) {
        const COLOR = [
            "#707070",
            "#A00000",
            "#B00000",
            "#C00000",
            "#D00000",
            "#E00000",
            "#F00000",
            "#0000A0",
            "#0000B0",
            "#0000C0",
            "#0000D0",
            "#0000E0",
            "#0000F0",
            "#0000A0",
            "#0000B0",
            "#0000C0",
            "#0000D0",
            "#0000E0",
            "#0000F0"
        ]
        return `${this.getAxes(index)}; background-color: ${COLOR[index - 1]} `
    },

    getQuadStyle(quad) {
        console.log(quad);
        return `z-index: ${20 - quad.index}; ${this.getAxes(quad.index)}; clip-path: ${quad.polygon};`
    },

    getQuadrant_ids() {
        return this.hex_macro.quadrant_ids;
    },

    getHex_ids(quad) {
        return quad.hex_ids;
    },
});