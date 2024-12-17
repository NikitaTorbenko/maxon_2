<script setup lang="ts">
import { useRouter } from "vue-router";
import { ProductCard } from "entities/product";
import { LikeProduct } from "features/like-product/ui";
import { AddProduct } from "features/cart-product";
import { getProducts } from "../api/getProducts";
import { onMounted, ref } from "vue";
import { IProduct } from "entities/product/model/types/types";

const products = ref<IProduct[]>([])

const router = useRouter();

const clickCardHandle = (id: number) => {
  router.push({ path: `/product/${id}` });
};

const fetchProducts = async () => {
  const { data, status } = await getProducts()
  if (status === 200) {
    products.value = data.data.product
  }
}

onMounted(() => {
  fetchProducts()
})

</script>
<template>
  <div class="flex flex-col items-center justify-center mx-auto">
    <h2 class="text-2xl font-bold text-primary">Популярные товары</h2>
    <div class="flex flex-wrap justify-between gap-3 mt-9">
      <ProductCard
        @click="clickCardHandle(card.id)"
        v-for="card in products"
        :product="card"
      >
        <template #like>
          <LikeProduct @click.stop :id="String(card.id)" v-model:favorite="card.favorite" v-model:cart="card.cart" />
        </template>
        <template #add>
          <AddProduct :onclick="(e: any) => e.stopPropagation()" />
        </template>
      </ProductCard>
    </div>
  </div>
</template>
<style lang="scss"></style>
