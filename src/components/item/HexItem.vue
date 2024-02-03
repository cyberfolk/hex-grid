<script>
import { state } from "../../state.js"
export default {
    name: "HexItem",
    components: {},
    props: { hex: Object, },
    data() { return { state, }; },
}
</script>

<template>
    <div class="hex" :style="state.getHexStyle(hex)">
        <div class="hex_code"> {{ hex.code }} </div>
    </div>
    <!-- /.hex -->
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.border {
    --path: #{$HEX_PATH};
    --border: #{$HEX_BORDER};
}

.hex {
    clip-path: polygon($HEX_PATH);
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
