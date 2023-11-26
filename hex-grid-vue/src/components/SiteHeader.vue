<script>
export default {
  name: "SiteHeader",
  components: {},
};
</script>

<template>
  <header id="app_header" class="d-flex align-items-center  justify-content-center bg-primary">
    <h1 class="text-warning"> Hex-Grid-Vue</h1>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_header {
  height: $H_header;
}
</style>
