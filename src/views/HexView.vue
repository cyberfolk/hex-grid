<script>
import HexItem from "../components/item/HexItem.vue"
export default {
    name: "HexView",
    components: { HexItem },
    data() {
        return {
            hex_tmp: {
                "id": 1,
                "name": "A.00.01",
                "code": "A.00.01",
                "circle_order": 0,
                "circle_number": 1,
                "index": 1,
                "color": "#ff0000",
                "quad_id": 1
            }
        };
    },
};
</script>

<template>
    <main id="hex_view">
        <HexItem :hex="this.hex_tmp"></HexItem>
    </main>
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
