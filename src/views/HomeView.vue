<script>
import { state } from "../state.js"
import QuadrantItem from "../components/item/QuadrantItem.vue"
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
            <router-link :to="{ 'name': 'quad' }">
                <QuadrantItem v-for="i in state.hex_macro.quadrant_ids" :quad="i" />
            </router-link>
        </div>
    </div>
    <!-- /.quadrant -->
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.quadrant:hover {
    filter: brightness(70%);
}
</style>
