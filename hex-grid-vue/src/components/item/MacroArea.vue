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
    <div class="macro_area" :style="state.getMAStyle()">
        <QuadrantItem v-for="i in 19" :index="i"></QuadrantItem>
    </div>
    <!-- /.quadrant -->
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.macro_area {
    background: rgba(0, 0, 0, 0.192);
    position: relative;
}
</style>
