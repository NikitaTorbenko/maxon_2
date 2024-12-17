<script setup lang="ts">
import { IProduct } from "../model/types/types";
interface IProps {
  product: IProduct;
}
const props = defineProps<IProps>();
</script>
<template>
  <div
    class="relative bg-gray-light rounded-2xl p-4 w-[167px] h-[355px] overflow-hidden cursor-pointer duration-300 hover:scale-95"
  >
    <div class="absolute top-0 left-0">
      <slot name="like"></slot>
    </div>
    <div>
      <img
        :src="props.product.photo"
        v-if="props.product.photo"
        alt="image"
        class="h-[135px] w-[135px] object-cover"
      />
      <div
        class="h-[135px] w-[135px] bg-gray-400 flex items-center justify-center"
        v-else
      >
        <p>Фото нет</p>
      </div>
      <h3 class="text-sm font-bold text-white mt-3 truncate">
        {{ props.product.name }}
      </h3>
    </div>
    <div class="mt-2 h-20">
      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
        v-if="props.product.portion"
      >
        <p>Порций</p>
        <p>{{ props.product.portion }}</p>
      </div>
      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
        v-if="props.product.weight"
      >
        <p>Вес</p>
        <p>{{ props.product.weight }}</p>
      </div>
      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
        v-if="props.product.volume"
      >
        <p>Объем</p>
        <p>{{ props.product.volume }}</p>
      </div>
      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
        v-if="props.product.puffs"
      >
        <p>Затяжек</p>
        <p>до {{ props.product.puffs }}</p>
      </div>

      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50 mt-2"
      >
        <p>Вкус</p>
        <div>
          <p
            class="w-[67px] text-right truncate"
            v-for="(item, index) in props.product.flavours"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-between text-sm font-normal text-white opacity-50 mt-2"
      >
        <p>Никотин</p>
        <p>{{ props.product.nicotine }}{{ props.product.typeNicotine }}</p>
      </div>
    </div>
    <div class="mt-6">
      <p class="text-[10px] font-normal text-white opacity-50">Стоимость:</p>
      <p class="text-sm font-bold text-white">{{ props.product.price }} руб.</p>
    </div>
    <div class="absolute bottom-0 right-0">
      <slot name="add"></slot>
    </div>
  </div>
</template>
<style lang="scss"></style>
