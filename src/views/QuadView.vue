<script>
import { state } from "../state.js"
import QuadrantItem from "../components/item/QuadrantItem.vue"
export default {
    name: "QuadView",
    components: { QuadrantItem },
    data() {
        return {
            state,
            quad_selected: null,
        };
    },
    mounted() {
        this.updateQuadSelected();
    },
    watch: {
        // Osserva per cambiamenti su `state.quad_selected`
        'state.quad_selected': {
            immediate: true,
            handler() {
                this.updateQuadSelected();
            }
        }
    },
    methods: {
        updateQuadSelected() {
            const index = this.state.quad_selected;
            this.quad_selected = this.state.hex_macro.quadrant_ids[index - 1];
        },
    },
};
</script>

<template>
    <div v-if="quad_selected">
        <!-- Uso di `:key` per forzare la ricreazione del componente -->
        <QuadrantItem class="re_center" :key="quad_selected" :quad="quad_selected" />
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.re_center {
    transform: scale(4);
    top: 37.4% !important;
    left: 37.5% !important;
}
</style>