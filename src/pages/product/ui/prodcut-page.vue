<script setup lang="ts">
import { layout } from "widgets/layout";
import { BreadCrumbs } from "widgets/bread-crumbs";
import { ProductPreview } from "entities/product";
import backSVG from 'shared/assets/ico/back.svg'
import InlineSvg from 'vue-inline-svg'
import { LikeProduct } from "features/like-product/ui";
import { AddProduct } from "features/cart-product";
import { useRoute } from "vue-router";
import { getProduct } from "../api/getProduct";
import { onMounted, ref } from "vue";


const route = useRoute()

const product = ref()

const id = route.params.id[0]

const fetchProduct = async () => {
  const { data, status } = await getProduct(id)
  if (status === 200) {
    product.value = data.data
  }
}

onMounted(() => {
  fetchProduct()
})
</script>
<template>
  <layout is-effect-background class="h-full" v-if="product">
    <BreadCrumbs class="mt-6" :default-selected="2" :values="[
      { title: 'Главная', link: '/' },
      { title: 'Популярное', link: '/' },
      { title: product.name, link: '/' },
    ]" />

    <ProductPreview class="mt-8" :product="product">
      <template #like>
        <LikeProduct />
      </template>
      <template #add>
        <AddProduct />
      </template>
      <template #back>
        <RouterLink to="/">
          <InlineSvg :src="backSVG" />
        </RouterLink>
      </template>
    </ProductPreview>
  </layout>
</template>
<style lang="scss"></style>
