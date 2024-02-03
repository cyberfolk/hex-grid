<script>
import { state } from "../state.js"
import MacroArea from "../components/item/MacroArea.vue"
import InfoPanelLeft from "../components/item/InfoPanelLeft.vue"
export default {
    name: "HomeView",
    components: { MacroArea, InfoPanelLeft },
    data() { return { state, }; },
};
</script>

<template>
    <div class="d-flex h-100">
        <InfoPanelLeft></InfoPanelLeft>
        <MacroArea class=" m-auto"></MacroArea>
        <div class="flex-grow-1 bg-secondary "></div>
    </div>
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
