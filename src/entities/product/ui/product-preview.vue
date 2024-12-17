<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IProduct } from "../model/types/types";
interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>();

const getType = () => {
  if (props.product.type === 'pod') {
    if (props.product.type_for_snus_and_pod === 1) {
      return 'без зарядки'
    } else {
      return 'с зарядкой'
    }
  } else if (props.product.type === 'snus') {
    if (props.product.type_for_snus_and_pod === 1) {
      return 'табачный'
    } else {
      return 'бестабачный'
    }
  }
}

const type = ref()

onMounted(() => {
  type.value = getType()
})
</script>
<template>
  <div>
    <div class="relative">
      <div class="absolute -top-2 left-0">
        <slot name="back"></slot>
      </div>
      <h2 class="text-base font-bold text-white w-full flex justify-center">
        {{ props.product.name }}
      </h2>
      <img class="mt-6" width="353px" height="343px" :src="props.product.photo" alt="image"
        v-if="props.product.photo" />
      <div class="mt-6 w-[353px] h-[353px] bg-gray-400 flex items-center justify-center">
        <p>Нет Фото</p>
      </div>
      <div
        class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50 mt-4"
        v-if="type">
        <p>Тип</p>
        <p>{{ type }}</p>
      </div>

      <div>
        <div
          class="border-b border-solid border-gray-light opacity-50 py-2 flex flex-wrap justify-between text-sm font-normal text-white"
          v-if="props.product.type === 'snus'">
          <p>Количество порций</p>
          <p>{{ props.product.special }}</p>
        </div>
        <div
          class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
          v-if="props.product.weight">
          <p>Вес</p>
          <p>{{ props.product.weight }}</p>
        </div>
        <div
          class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
          v-if="props.product.volume">
          <p>Объем</p>
          <p>{{ props.product.volume }}</p>
        </div>
        <div
          class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
          v-if="props.product.type === 'pod'">
          <p>Количество затяжек</p>
          <p>до {{ props.product.special }}</p>
        </div>

        <div
          class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50">
          <p>Вкус</p>
          <div>
            <p class="w-[67px] text-right" v-for="(item, index) in props.product.flavours" :key="index">{{ item }}</p>
          </div>

        </div>
        <div
          class="border-b border-solid border-gray-light py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50">
          <p>Количество никотина</p>
          <p>{{ props.product.nicotine }}{{ props.product.typeNicotine }}</p>
        </div>
      </div>
      <div class="py-2 flex flex-wrap justify-between text-sm font-normal text-white opacity-50"
        v-if="props.product.manufacturer">
        <p>Страна производства</p>
        <p>{{ props.product.manufacturer }}</p>
      </div>

      <div class="bg-backround-primary fixed bottom-0 w-full mt-4 flex justify-between items-center max-w-[95vw]">
        <p class="text-2xl font-bold text-primary">
          {{ props.product.price }}₽
        </p>
        <div class="flex">
          <slot name="add"></slot>
          <slot name="like"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
