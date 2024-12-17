<script setup lang='ts'>
import { onClickOutside } from "@vueuse/core";
import { Filters } from "features/Filters";
import { SearchField } from "features/sorting-product";
import cross from 'shared/assets/ico/cross.svg'
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getProductsSearch } from "../api/search";
import { useSearchStore } from "features/Filters/model/filtersStore";

const router = useRouter()

const isOpenFilters = ref(false)
const target = ref(null)

const searchValue = ref('')
const store = useSearchStore()

const products = ref()

onClickOutside(target, () => isOpenFilters.value = false)

const fetchSearch = async () => {
  const { data, status } = await getProductsSearch(searchValue.value, store.productType, +store.type, store.nicotine, store.flavour, store.special, store.brand)
  if (status === 200) {
    products.value = data.data
  }
}

watch(() => [store.searchValue, store.productType, store.nicotine, store.flavour, store.special, store.brand, store.type], () => {
  fetchSearch()
})

</script>
<template>

  <div class="pt-10 px-3">
    <div class="bg-black/50 z-30 absolute top-0 h-screen w-screen left-0" v-if="isOpenFilters" />
    <div class="flex w-full justify-between mb-8">
      <h2 class=" uppercase font-oswald text-primary text-2xl">Поиск</h2>
      <img @click="router.go(-1)" :src="cross" class="cursor-pointer z-50" />
    </div>
    <search-field v-model:is-open-filters="isOpenFilters" />
    <Teleport to="body">
      <div class="w-screen h-screen absolute top-0 left-0 overflow-hidden">
        <Filters ref="target" class="duration-300 absolute z-30 left-0"
          :class="isOpenFilters ? 'top-[20%] opacity-100' : ' top-[100%] opacity-0'" />
      </div>
    </Teleport>
    <div v-if="products" class="mt-5 mx-auto flex flex-col gap-3">
      <div class="flex gap-2 justify-between" v-for="(item, index) in products.snus" :key="index">
        <div>
          <img :src="item.photo" v-if="item.photo" />
          <div class=" size-10 bg-gray-400 flex items-center justify-center" v-else>
            <p class="text-xs">
              Нет фото
            </p>
          </div>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] truncate">{{ item.name }}</p>
          <p class=" text-sm font-normal leading-4 text-[#26C323] mt-2">Снюс</p>
        </div>
        <div class="flex flex-col">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] mt-2 text-end">{{ item.price }} руб</p>
        </div>
      </div>
      <div class="flex gap-2 justify-between" v-for="(item, index) in products.pod" :key="index">
        <div>
          <img :src="item.photo" v-if="item.photo" />
          <div class=" size-10 bg-gray-400 flex items-center justify-center" v-else>
            <p class="text-xs">
              Нет фото
            </p>
          </div>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] truncate">{{ item.name }}</p>
          <p class=" text-sm font-normal leading-4 text-[#26C323] mt-2">Электронные устройства</p>
        </div>
        <div class="flex flex-col">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] mt-2 text-end">{{ item.price }} руб</p>
        </div>
      </div>
      <div class="flex gap-2 justify-between" v-for="(item, index) in products.liquid" :key="index">
        <div>
          <img :src="item.photo" v-if="item.photo" />
          <div class=" size-10 bg-gray-400 flex items-center justify-center" v-else>
            <p class="text-xs">
              Нет фото
            </p>
          </div>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] truncate">{{ item.name }}</p>
          <p class=" text-sm font-normal leading-4 text-[#26C323] mt-2">Жидкости</p>
        </div>
        <div class="flex flex-col">
          <p class=" text-sm font-normal leading-4 text-[#FFC01E] mt-2 text-end">{{ item.price }} руб</p>
        </div>
      </div>
    </div>


  </div>
</template>
<style lang='scss'></style>