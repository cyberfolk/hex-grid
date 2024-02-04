<script>
import { state } from "../state.js"
import HexItem from "../components/item/HexItem.vue"
export default {
    name: "QuadView",
    components: { HexItem },
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
        <router-link :to="{ 'name': 'hex' }">
            <div class="quadrant" :style="'clip-path: ' + quad_selected.polygon + ';'">
                <HexItem v-for="i in quad_selected.hex_ids" :hex="i" />
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.quadrant {
    background-color: $dark;
    height: calc($QUAD_HEIGHT * 4);
    width: calc($QUAD_WIDTH * 4);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
}

.hex {
    height: calc($HEX_HEIGHT * 4);
    width: calc($HEX_WIDTH * 4);
}

.hex:hover {
    filter: brightness(50%) !important;
}
</style>
