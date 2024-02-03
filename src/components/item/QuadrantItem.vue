<script>
import { state } from "../../state.js"
import HexItem from "./HexItem.vue"
export default {
    name: "QuadrantItem",
    components: { HexItem },
    props: { quad: Object, },
    data() { return { state, }; },
};
</script>

<template>
    <div class="quad quad-border" :style="state.getQuadStyle(quad)">
        <div class="quad-content" :style="'clip-path:' + quad.polygon + ';'">
            <HexItem v-for=" i in state.getHex_ids(quad)" :hex="i"></HexItem>
        </div>
    </div>
    <!-- /.quadrant -->
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;


.quad-border {
    background-color: black;
    padding: $QUAD_BORDER;
}

.quad {
    height: $QUAD_HEIGHT;
    width: $QUAD_WIDTH;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;

    .quad-content {
        height: 100%;
        width: 100%;
        display: flex;
    }
}
</style>
