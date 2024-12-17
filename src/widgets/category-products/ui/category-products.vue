<script setup lang="ts">
import CategoryItem from "./components/category-item.vue";
import snusImage from "shared/assets/img/snus-2.png";
import vapeImage from "shared/assets/img/vape.png";
import liquidImage from "shared/assets/img/liquid-2.png";
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold text-primary">Категории товаров</h2>
    <div class="flex items-center gap-[10px] mt-6">
      <CategoryItem class-box="item" title="Снюс" :icon="snusImage" />
      <CategoryItem
        class-box="item"
        title="Электронные устройства"
        :icon="vapeImage"
      />
      <CategoryItem class-box="item" title="Жидкости" :icon="liquidImage" />
    </div>
  </div>
</template>
<style lang="scss">

.item:nth-child(1) {
  background: linear-gradient(145.86deg, #ffc01e -5.59%, #ffa41c 129.55%);
}
.item:nth-child(2) {
  background: linear-gradient(145.86deg, #ff61c7 -5.59%, #fe9900 129.56%);
}
.item:nth-child(3) {
  background: linear-gradient(145.86deg, #c350f3 -5.46%, #08e1d9 125.59%);
}
</style>
