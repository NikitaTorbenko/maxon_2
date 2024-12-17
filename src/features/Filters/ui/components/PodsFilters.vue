<script setup lang='ts'>
import { switchButton } from 'shared/ui/switchButton';
import { onMounted, ref, watch } from 'vue';
import Slider from 'primevue/slider';
import check from 'shared/assets/ico/Check.svg'
import next from 'shared/assets/ico/forvard_white.svg'
import InputSwitch from 'primevue/inputswitch';
import { useSearchStore } from 'features/Filters/model/filtersStore';

const type = ref('С подзарядкой')
const ice = ref(false)
const portion = ref<number[]>([])
const nicotine = ref(2)

interface Emits {
  (emit: 'update:currentPage', value: string): void
}

const emit = defineEmits<Emits>()

const addPortion = (id: number) => {
  if (!portion.value.includes(id)) {
    portion.value.push(id)
  } else {
    portion.value = portion.value.filter((item: any) => item !== id)
  }
  store.flavour = portion.value.join()
}

const store = useSearchStore()

watch(type, () => {
  portion.value = []
  if (type.value === 'С подзарядкой') {
    store.type = 0
  } else {
    store.type = 1
  }
})

watch(nicotine, () => {
  store.nicotine = nicotine.value
})

onMounted(() => {
  store.nicotine = 0
})

</script>
<template>
  <div class="pt-5 pb-10">
    <switchButton text1="С подзарядкой" text2="Без зарядки" v-model:value="type" />
    <div class=" mt-4 flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <p class="text-white/50">Никотин</p>
        <div class="flex justify-between text-white">
          <p>До 2%</p>
          <p>До 5%</p>
          <p>До 7%</p>
        </div>
        <Slider :min="2" :max="8" v-model="store.nicotine" />
      </div>
      <div class="flex flex-col mt-3">
        <p class="text-white/50 mb-3">Вкус</p>
        <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between">
          <p>Лёд</p>
          <InputSwitch v-model:model-value="ice" />
        </div>
        <div class="mt-4">
          <p class="text-white/50 mb-3">Количество затяжек</p>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(0)">
            <p>До 5000</p>
            <img :src="check" v-if="portion.includes(0)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(1)" v-if="type === 'С подзарядкой'">
            <p>До 8000</p>
            <img :src="check" v-if="portion.includes(1)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(2)" v-if="type === 'С подзарядкой'">
            <p>До 12000</p>
            <img :src="check" v-if="portion.includes(2)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(3)">
            <p>Более</p>
            <img :src="check" v-if="portion.includes(3)" />
          </div>
        </div>
      </div>
      <div class="flex text-white/80 h-12 items-center duration-300 justify-between mt-4"
        @click="emit('update:currentPage', 'Бренд')">
        <p>Бренд</p>
        <img :src="next" />
      </div>
    </div>
  </div>
</template>
<style lang='css'>
.p-slider-range {
  background: #FFC01E;
}

.p-slider {
  background: #FFC01E;
}

.p-slider-handle {
  background: #FFC01E;
}

.p-slider-handle::before {
  background: #FFC01E;
}

.p-inputswitch-slider {
  background: #FFC01E
}
</style>