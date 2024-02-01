<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    props: { hex: Object, },
    data() { return { state, }; },
    mounted() {
        CSS.paintWorklet.addModule('./src/assets/js/polygon-border.js');
    }
}
</script>

<template>
    <div class="hex hex_border" :style="state.getHexStyle(hex)">
        <div class="hex_code"> {{ hex.code }} </div>
    </div>
    <!-- /.hex -->
</template>

<style lang="scss">
@use '../../assets/styles/partials/variables' as *;


@property --border {
    syntax: '<length>';
    inherits: true;
    initial-value: 0;
}

.hex_border {
    background: green;
    clip-path: polygon($hex_path);
    -webkit-mask: paint(polygon-border);
    --path: 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%;
    --border: 5px;
}

.hex {
    clip-path: polygon($hex_path);
    height: $HEX_HEIGHT;
    width: $HEX_WIDTH;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    .hex_code {
        font-size: 0.5rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        font-weight: bold;
        transform: translate(-50%, 0);
        margin-bottom: 0.5rem !important;
    }
}
</style>
