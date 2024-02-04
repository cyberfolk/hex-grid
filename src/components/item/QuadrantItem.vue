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
    <div class="quadrant" :style="state.getQuadStyle(quad)">
        <HexItem v-for="i in quad.hex_ids" :hex="i" />
    </div>
    <!-- /.quadrant -->
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.quadrant {
    background-color: $dark;
    height: $QUAD_HEIGHT;
    width: $QUAD_WIDTH;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
}

.hex_id {
    font-size: 0.4rem;
}
</style>
