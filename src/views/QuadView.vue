<script>
import { state } from "../state.js"
import QuadrantItem from "../components/item/QuadrantItem.vue"
import InfoPanelLeft from "../components/item/InfoPanelLeft.vue"

export default {
    name: "QuadView",
    components: { QuadrantItem, InfoPanelLeft },
    data() {
        return {
            state,
            quad_selected: 0,
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
    <main id="quad_view">
        <InfoPanelLeft></InfoPanelLeft>
        <div v-if="quad_selected">
            <!-- Uso di `:key` per forzare la ricreazione del componente -->
            <QuadrantItem :key="quad_selected" :quad="quad_selected"></QuadrantItem>
        </div>
        <div class="flex-grow-1 bg-secondary"></div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#quad_view {
    height: $H_main;
}
</style>