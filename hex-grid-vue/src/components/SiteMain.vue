<script>
import QuadrantItem from "./item/QuadrantItem.vue"
export default {
  name: "SiteMain",
  components: { QuadrantItem },
};
</script>

<template>
  <main>
    <QuadrantItem :index="0"></QuadrantItem>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;
</style>
