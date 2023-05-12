import { reactive } from 'vue'

export const state = reactive({
    CENTER: 50,
    X_SHIFT: 6.25,
    Y_SHIFT: 10,
    X_ARRAY: [0, 0, 3, 3, 0, -3, -3, 0, 3, 6, 6, 6, 3, 0, -3, -6, -6, -6, -3],
    Y_ARRAY: [0, -2, -1, 1, 2, 1, -1, -4, -3, -2, 0, 2, 3, 4, 3, 2, 0, -2, -3],
    HEX_WIDTH: 4,
    HEX_HEIGHT: 0,      // calc on mounted
    QUAD_HEIGHT: 0,     // calc on mounted
    QUAD_WIDTH: 0,      // calc on mounted
    SHIFT_REDUCTION: 0, // calc on mounted

    getTop(index) {
        return this.CENTER + (this.Y_ARRAY[index - 1] * this.Y_SHIFT) * this.SHIFT_REDUCTION + "%";

    },
    getLeft(index) {
        return this.CENTER + (this.X_ARRAY[index - 1] * this.X_SHIFT) * this.SHIFT_REDUCTION + "%";
    },

    calcDataDerivate() {
        const HEX_PADDING = 0.1;
        const QUAD_PADDING = 0.09;
        /**
         * QUAD_PADDING goes from 0 to HEX_PADDING
         * QUAD_PADDING = 0 --> means no QUAD_PADDING
         * QUAD_PADDING = HEX_PADDING --> means no HEX_PADDING 
         */
        HEX_REDUCTION = 1 - HEX_PADDING; // 0.9
        this.SHIFT_REDUCTION = 1 - QUAD_PADDING / 2; // 0.95
        this.HEX_HEIGHT = this.HEX_WIDTH * 0.5 * Math.sqrt(3);
        this.QUAD_HEIGHT = this.HEX_HEIGHT * 5 + "rem";
        this.QUAD_WIDTH = this.HEX_WIDTH * 4 + "rem";
        this.HEX_HEIGHT = this.HEX_HEIGHT * HEX_REDUCTION + "rem";
        this.HEX_WIDTH = this.HEX_WIDTH * HEX_REDUCTION + "rem";
    }
});