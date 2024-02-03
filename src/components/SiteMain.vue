<script>
import MacroArea from "./item/MacroArea.vue"
export default {
  name: "SiteMain",
  components: { MacroArea },
};
</script>

<template>
  <main id="app_main">
    <!-- <MacroArea class="m-auto"></MacroArea> -->
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_main {
  height: $H_main;
}
</style>
