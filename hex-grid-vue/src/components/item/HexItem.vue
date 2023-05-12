<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    props: { index: Number, },
    data() { return { state, }; },
}
</script>

<template>
    <div class="hex" :style="{
        top: state.getTop(this.index),
        left: state.getLeft(this.index),
        height: state.HEX_HEIGHT,
        width: state.HEX_WIDTH,
    }">
    </div>
    <!-- /.hex -->
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.hex {
    clip-path: $hex_polygon;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    &:nth-child(odd) {
        background-color: $primary;
    }

    &:nth-child(even) {
        background-color: $secondary;
    }
}
</style>
