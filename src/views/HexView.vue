<script>
import { state } from "../state.js"
import HexItem from "../components/item/HexItem.vue"
export default {
    name: "HexView",
    components: { HexItem },
    data() {
        return {
            state,
            hex_selected: null,
        };
    },
    mounted() {
        this.updateHexSelected();
    },
    watch: {
        // Osserva per cambiamenti su `state.quad_selected`
        'state.quad_selected': {
            immediate: true,
            handler() {
                this.updateHexSelected();
            }
        },
        'state.hex_selected': {
            immediate: true,
            handler() {
                this.updateHexSelected();
            }
        }
    },
    methods: {
        updateHexSelected() {
            if (this.state.quad_selected && this.state.quad_selected) {
                const quad_index = this.state.quad_selected;
                const hex_index = this.state.hex_selected;
                const quad_obj = this.state.hex_macro.quadrant_ids[quad_index - 1];
                this.hex_selected = quad_obj.hex_ids[hex_index - 1];
            }
        },
    },

};
</script>

<template>
    <div v-if="hex_selected">
        <!-- Uso di `:key` per forzare la ricreazione del componente -->
        <HexItem class="re_center" :key="hex_selected" :hex="hex_selected" />
    </div>
    <div class="flex-grow-1 bg-secondary" />
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.re_center {
    transform: scale(17.6);
    top: 47% !important;
    left: 47% !important;
}
</style>