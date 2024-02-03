<script>
import MacroArea from "./item/MacroArea.vue"
import HexItem from "./item/HexItem.vue"
export default {
  name: "SiteMain",
  components: { HexItem, MacroArea },
  data() {
    return {
      hexTmp: {
        'circle_number': 1,
        'circle_order': 0,
        'code': 'S.00.01',
        'color': '#ff005f',
        'id': 306,
        'index': 1,
        'name': 'S.00.01',
        'quad_id': 19
      },
    };
  },


};
</script>

<template>
  <main id="app_main">
    <MacroArea class="m-auto"></MacroArea>
    <!-- <HexItem :hex="this.hexTmp"></HexItem> -->
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_main {
  height: $H_main;
}
</style>
