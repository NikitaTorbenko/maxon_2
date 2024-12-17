<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import favoriteIcon from "shared/assets/ico/favorite.svg";
import cartIcon from "shared/assets/ico/cart.svg";
import userIcon from "shared/assets/ico/user.svg";
import { useRouter } from "vue-router";
import searchIcon from 'shared/assets/ico/search.svg'

interface IProps {
  cartTotal: number;
}

const props = defineProps<IProps>();

const router = useRouter()
</script>
<template>
  <div class="flex items-center justify-between w-full max-w-[150px]">
    <button @click="router.push('/search')">
      <inline-svg :src="searchIcon"> </inline-svg>
    </button>
    <button @click="router.push('/favourites')">
      <inline-svg :src="favoriteIcon"> </inline-svg>
    </button>
    <button class="relative">
      <inline-svg @click="router.push('/basket')" :src="cartIcon"> </inline-svg>
      <!-- <div
        class="absolute w-[18px] h-[18px] flex items-center justify-center bg-[#883DF2] rounded-full -right-1 -bottom-2">
        <span :class="props.cartTotal > 9 ? 'text-[10px]' : ''" class="text-white text-xs font-normal">{{
          props.cartTotal > 9 ? `9+` : `${props.cartTotal}` }}</span>
      </div> -->
    </button>
    <button>
      <inline-svg @click="router.push('/profile')" :src="userIcon"> </inline-svg>
    </button>
  </div>
</template>
<style lang="scss"></style>
