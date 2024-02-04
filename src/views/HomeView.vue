<script>
import { state } from "../state.js"
import MacroArea from "../components/item/MacroArea.vue"
export default {
    name: "HomeView",
    components: { MacroArea },
    data() { return { state, }; },
};
</script>

<template>
    <MacroArea />
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
