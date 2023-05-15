<script>
import MacroArea from "./item/MacroArea.vue"
export default {
  name: "SiteMain",
  components: { MacroArea },
};
</script>

<template>
  <main>
    <MacroArea class="m-auto"></MacroArea>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;
</style>
