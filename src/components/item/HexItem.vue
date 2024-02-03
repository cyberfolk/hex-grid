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
    <div class="hex hex-border" :style="state.getHexStyle(hex)">
        <div class="hex-content" :style="'background-color:' + hex.color + ';'">
            <div class="hex-id position-absolute bottom-0 start-50 fw-bold mb-2"> {{ hex.code }} </div>
        </div>
    </div>
    <!-- /.hex -->
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.hex-border {
    background-color: black;
    padding: $HEX_BORDER;
}

.hex {
    clip-path: $HEX_POLYGON;
    height: $HEX_HEIGHT;
    width: $HEX_WIDTH;
    position: absolute;
    transform: translate(-50%, -50%);

    .hex-content {
        clip-path: $HEX_POLYGON;
        height: 100%;
        width: 100%;
        display: flex;

        .hex-id {
            font-size: 0.5rem;
            transform: translate(-50%, 0);
        }
    }



    /*     &:nth-child(odd) {
        background-color: $primary;
    }

    &:nth-child(even) {
        background-color: $secondary;
    } */
}
</style>
