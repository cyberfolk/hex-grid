<script>
export default {
    name: "HexItem",
    components: {},
    props: {
        index: String,
        quad: String,

    }
};
</script>

<template>
    <div class="hex"></div>
    <!-- /.hex -->
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.hex {
    clip-path: $hex_polygon;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
</style>
