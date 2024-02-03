<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    props: { hex: Object, },
    data() { return { state, }; },
    methods: {
        selectHex() {
            this.state.hex_selected = this.hex.index
            this.state.quad_selected = this.hex.quad_id
            console.log("quad", this.state.quad_selected, "hex", this.state.hex_selected);
        }
    }
}
</script>

<template>
    <div class="hex" :style="state.getHexStyle(hex)" @click="selectHex">
        <div class="hex_id position-absolute bottom-0 start-50 fw-bold mb-2"> {{ hex.code }} </div>
    </div>
    <!-- /.hex -->
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.hex {
    clip-path: $hex_polygon;
    height: $HEX_HEIGHT;
    width: $HEX_WIDTH;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    .hex_id {
        font-size: 0.4rem;
        transform: translate(-50%, 0);
    }
}
</style>
