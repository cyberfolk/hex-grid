<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    props: { hex: Object, },
    data() { return { state, }; },
}
</script>

<template>
    <div class="hex" :style="state.getHexStyle(hex)">
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
        font-size: 0.5rem;
        transform: translate(-50%, 0);
    }

    /*     &:nth-child(odd) {
        background-color: $primary;
    }

    &:nth-child(even) {
        background-color: $secondary;
    } */
}
</style>
