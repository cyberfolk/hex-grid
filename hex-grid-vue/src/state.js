import { reactive } from 'vue'

export const state = reactive({
    X_ARRAY: [0, 0, 18.75, 18.75, 0, -18.75, -18.75, 0, 18.75, 37.5, 37.5, 37.5, 18.75, 0, -18.75, -37.5, -37.5, -37.5, -18.75],
    Y_ARRAY: [0, -20, -10, 10, 20, 10, -10, -40, -30, -20, 0, 20, 30, 40, 30, 20, 0, -20, -30],
    HEX_WIDTH: 4,
    HEX_HEIGHT: 0,      // calc on mounted
    QUAD_HEIGHT: 0,     // calc on mounted
    QUAD_WIDTH: 0,      // calc on mounted
    SHIFT_REDUCTION: 0, // calc on mounted
    MA_WIDTH: 0,        // calc on mounted
    MA_HEIGHT: 0,       // calc on mounted


    getAxes(index) {
        const asse_y = 50 + this.Y_ARRAY[index - 1] * this.SHIFT_REDUCTION + "%";
        const asse_x = 50 + this.X_ARRAY[index - 1] * this.SHIFT_REDUCTION + "%";
        return `top: ${asse_y}; left: ${asse_x};`
    },

    getHexStyle(index) {
        return `height: ${this.HEX_HEIGHT}; width: ${this.HEX_WIDTH}; ${this.getAxes(index)}; `
    },

    getQuadStyle(index) {
        return `height: ${this.QUAD_HEIGHT}; width: ${this.QUAD_WIDTH}; ${this.getAxes(index)}; `
    },

    getMAStyle() {
        return `height: ${this.MA_HEIGHT}; width: ${this.MA_WIDTH};`
    },

    calcDataDerivate() {
        const HEX_PADDING = 0.1;
        const QUAD_PADDING = 0.09; // [0; HEX_PADDING] 
        const HEX_REDUCTION = 1 - HEX_PADDING; // 0.9
        this.SHIFT_REDUCTION = 1 - QUAD_PADDING / 2; // 0.95
        this.HEX_HEIGHT = this.HEX_WIDTH * 0.5 * Math.sqrt(3);
        this.QUAD_HEIGHT = this.HEX_HEIGHT * 5 + "rem";
        this.QUAD_WIDTH = this.HEX_WIDTH * 4 + "rem";
        this.MA_WIDTH = this.HEX_WIDTH * 16 + "rem";
        this.MA_HEIGHT = this.HEX_HEIGHT * 20 + "rem";
        this.HEX_HEIGHT = this.HEX_HEIGHT * HEX_REDUCTION + "rem"; // Add reduction to show hex padding
        this.HEX_WIDTH = this.HEX_WIDTH * HEX_REDUCTION + "rem"; // Add reduction to show hex padding
    }
});