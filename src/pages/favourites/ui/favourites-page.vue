<script setup lang="ts">
import { useRouter } from "vue-router";
import { layout } from "widgets/layout";
import tochki from "shared/assets/ico/3 tochki.svg";
import { ItemBasket } from "shared/ui/ItemsBasket";
import strelka from "shared/assets/ico/back.svg";
import { ProductCard } from "entities/product";
import { onMounted, ref } from "vue";
import { IProduct } from "entities/product/model/types/types";
import { getProducts } from '../../../widgets/product-list/api/getProducts';
import { LikeProduct } from 'features/like-product/ui';
import { AddProduct } from 'features/cart-product';
import { getFavorite } from '../api/favoriteService';

const products = ref<IProduct[]>([]);

const router = useRouter();

const clickCardHandle = (id: number) => {
  router.push({ path: `/product/${id}` });
};

const fetchProducts = async () => {
  const { data, status } = await getFavorite();
  if (status === 200) {
    products.value = data.data.product;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <layout is-effect-background class="h-screen">
    <div class="flex justify-between items-center mt-5">
      <h2 class="font-bold text-xl leading-[29px] text-[#FFC01E] w-[74px] h-[30px]">
        Избранное
      </h2>
      <img :src="tochki" class="cursor-pointer" />
    </div>
    <div class="flex flex-wrap justify-between gap-3 mt-9">
      <ProductCard @click="clickCardHandle(card.id)" v-for="card in products" :product="card" >
        <template #like>
          <LikeProduct @click.stop :id="String(card.id)" v-model:favorite="card.favorite" v-model:cart="card.cart" />
        </template>
        <template #add>
          <AddProduct @click.stop v-model:cart="card.cart" :id="String(card.id)" />
        </template>
      </ProductCard>
    </div>
  </layout>
</template>
<style lang="scss"></style>
