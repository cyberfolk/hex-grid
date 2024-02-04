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
    <div class="flex-grow-1 bg-secondary" />
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_main {
  height: $HEIGHT_MAIN;
}

.col_map {
  height: $MAP_HEIGHT;
  width: $MAP_WIDTH;
  position: relative;
}
</style>
