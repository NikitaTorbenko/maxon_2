<script setup lang="ts">
import { CarouselOffer } from "widgets/carousel-offers";
import CategoryProducts from "widgets/category-products/ui/category-products.vue";
import { layout } from "widgets/layout";
import { ProductList } from "widgets/product-list";
</script>
<template>
  <layout is-show-username>
    <CarouselOffer class="mt-12" />
    <CategoryProducts class="mt-12" />
    <ProductList class="mt-12" />
  </layout>
</template>
<style lang="scss"></style>
