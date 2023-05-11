<script>
import HexItem from "./item/HexItem.vue"
export default {
  name: "SiteMain",
  components: { HexItem },
};
</script>

<template>
  <main>
    <HexItem></HexItem>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>
