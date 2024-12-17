<script setup lang='ts'>
import next from 'shared/assets/ico/forvard_white.svg'
import back from 'shared/assets/ico/back.svg'
import { ref, watch } from 'vue';
import inlineSvg from 'vue-inline-svg';
import SnusFilters from './components/SnusFilters.vue';
import { useRefHistory } from '@vueuse/core';
import Brands from './components/Brands.vue';
import PodsFilters from './components/PodsFilters.vue';
import LiquidFilters from './components/LiquidFilters.vue'
import { useSearchStore } from '../model/filtersStore';


const store = useSearchStore()
const currentPage = ref('Фильтры')
const { undo } = useRefHistory(currentPage)

const brands = ref<number[]>([])

const addBrand = (id: number) => {
  if (!brands.value.includes(id)) {
    brands.value.push(id)
  } else {
    brands.value = brands.value.filter((item: any) => item !== id)
  }
}

watch(brands, () => {
  const newBrands = brands.value.join()
  store.brand = newBrands
})

watch(currentPage, () => {
  switch (currentPage.value) {
    case 'Эл. Устройства':
      store.productType = 'pod'
      break;
    case 'Снюс':
      store.productType = 'snus'
      break;
    case 'Жидкости':
      store.productType = 'liquid'
      break;
  }
})
</script>
<template>
  <div class="h-[80vh] bg-bg-secondary w-screen px-5 rounded-t-xl overflow-auto">
    <div>
      <div class=" w-12 h-[3px] bg-primary/60 rounded-full mx-auto mt-3" />
      <div class="flex justify-between items-end mt-4">
        <div class="flex items-center h-10">
          <img :src="back" v-if="currentPage !== 'Фильтры'" @click="undo()" class="cursor-pointer" />
          <h2 class="text-primary uppercase font-oswald text-xl">{{ currentPage }}
          </h2>
        </div>
        <p class="text-primary/70 cursor-pointer">Очистить</p>
      </div>
      <div class="mt-5" v-if="currentPage === 'Фильтры'">
        <div class="flex justify-between text-white/80 h-[56px] border-y border-white/50 items-center cursor-pointer"
          @click="currentPage = 'Снюс'">
          <p>
            Снюс
          </p>
          <inlineSvg :src="next" />
        </div>
        <div class="flex justify-between text-white/80 h-[56px] border-y border-white/50 items-center cursor-pointer"
          @click="currentPage = 'Эл. Устройства'">
          <p>
            Электронные устройства
          </p>
          <inlineSvg :src="next" />
        </div>
        <div class="flex justify-between text-white/80 h-[56px] border-y border-white/50 items-center cursor-pointer"
          @click="currentPage = 'Жидкости'">
          <p>
            Жидкости
          </p>
          <inlineSvg :src="next" />
        </div>
      </div>
      <SnusFilters v-else-if="currentPage === 'Снюс'" v-model:current-page="currentPage" :brands="brands.length" />
      <PodsFilters v-else-if="currentPage === 'Эл. Устройства'" v-model:current-page="currentPage" />
      <Brands v-else-if="currentPage === 'Бренд'" @apply="addBrand" :brands="brands" />
      <LiquidFilters v-else-if="currentPage === 'Жидкости'" />
    </div>
  </div>


</template>
<style lang='scss'></style>