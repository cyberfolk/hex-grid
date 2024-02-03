<script>
import { state } from "../../state.js"
import QuadrantItem from "./QuadrantItem.vue"
export default {
    name: "MacroArea",
    components: { QuadrantItem },
    data() { return { state, }; },
    mounted() { state.fetchHexMacro(state.API_URL_BASE + state.API_HEX_MACRO); },
};
</script>

<template>
    <div class="macro_area">
        <div v-if="state.loaded_hex_macro">
            <QuadrantItem v-for="i in state.hex_macro.quadrant_ids" :quad="i" />
        </div>
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
