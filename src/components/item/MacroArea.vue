<script>
import { state } from "../../state.js"
import QuadrantItem from "./QuadrantItem.vue"
export default {
    name: "MacroArea",
    components: { QuadrantItem },
    data() { return { state, }; },
};
</script>

<template>
    <div class="macro_area">
        <QuadrantItem v-for="i in state.QUADS" :quad="i" />
    </div>
    <!-- /.quadrant -->
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.macro_area {
    height: $MA_HEIGHT;
    width: $MA_WIDTH;
    background: rgba(0, 0, 0, 0.192);
    position: relative;
}
</style>
