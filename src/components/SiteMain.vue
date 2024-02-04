<script>
import InfoPanelLeft from "../components/item/InfoPanelLeft.vue"
export default {
  name: "SiteMain",
  components: { InfoPanelLeft },
};
</script>

<template>
  <main id="app_main" class="d-flex">
    <div class="col-4 bg-primary">
      <InfoPanelLeft />
    </div>
    <div class="col_map">
      <router-view />
    </div>
    <div class="flex-grow-1 bg-secondary h-100" />
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_main {
  height: $H_main;
}

.col_map {
  height: $MA_HEIGHT;
  width: $MA_WIDTH;
  position: relative;
}
</style>
