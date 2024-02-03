<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    data() { return { state, }; },
    methods: {
    }
}
</script>

<template>
    <div class="col-4 bg-primary h-100">
        <div class="p-5">
            <div class="input-group mb-3">
                <span class="input-group-text" id="quad_input">Quadrante</span>
                <input id="quad_input" name="quad_input" class="form-control" placeholder="..."
                    type="number" min="1" max="19" step="1" v-model="state.quad_selected">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="hex_input">Esagono</span>
                <input id="hex_input" name="hex_input" class="form-control" placeholder="..."
                    type="number" min="1" max="19" step="1" v-model="state.hex_selected">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;

.input-group {
    width: 165px !important;
    text-align: end;

    span {
        text-align: end;
        width: 105px;
        font-weight: bold;
        display: block;
    }
}
</style>
