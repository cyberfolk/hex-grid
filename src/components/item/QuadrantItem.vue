<script>
import { state } from "../../state.js"
import HexItem from "./HexItem.vue"
export default {
    name: "QuadrantItem",
    components: { HexItem },
    props: { index: Number, },
    data() { return { state, }; },
};
</script>

<template>
    <div class="quadrant" :style="state.getQuadStyle(index)">
        <HexItem v-for="i in state.getHexList(index)" :index="i"></HexItem>
    </div>
    <!-- /.quadrant -->
</template>

<style lang="scss" scoped>
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
</style>
