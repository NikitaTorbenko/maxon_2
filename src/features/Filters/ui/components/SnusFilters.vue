<script setup lang='ts'>
import { switchButton } from 'shared/ui/switchButton';
import { onMounted, ref, watch } from 'vue';
import Slider from 'primevue/slider';
import { getFlavours } from 'features/Filters/api/getFlavours';
import check from 'shared/assets/ico/Check.svg'
import next from 'shared/assets/ico/forvard_white.svg'
import { useSearchStore } from 'features/Filters/model/filtersStore';

const type = ref('Табачный')
const flavour = ref<number[]>([])
const flavourAdvice = ref()
const nicotine = ref(25)
const portion = ref<number[]>([])
const country = ref<number[]>([])

interface Props {
  brands: number
}

const props = defineProps<Props>()

interface Emits {
  (emit: 'update:currentPage', value: string): void
}

const emit = defineEmits<Emits>()

const getFlavourAdvice = async () => {
  const { data, status } = await getFlavours()
  if (status === 200) {
    flavourAdvice.value = data.data
  }
}

const addFlavour = (id: number) => {
  if (!flavour.value.includes(id)) {
    flavour.value.push(id)
  } else {
    flavour.value = flavour.value.filter((item: any) => item !== id)
  }
  store.flavour = flavour.value.join()
}

const addPortion = (id: number) => {
  if (!portion.value.includes(id)) {
    portion.value.push(id)
  } else {
    portion.value = portion.value.filter((item: any) => item !== id)
  }
}

const addCountry = (id: number) => {
  if (!country.value.includes(id)) {
    country.value.push(id)
  } else {
    country.value = country.value.filter((item: any) => item !== id)
  }
}

const store = useSearchStore()

watch(type, () => {
  portion.value = []
  if (type.value === 'Табачный') {
    store.type = 1
  } else {
    store.type = 0
  }
})

watch(nicotine, () => {
  store.nicotine = nicotine.value
})

onMounted(() => {
  getFlavourAdvice()
  store.nicotine = 0
})


</script>
<template>
  <div class="pt-5 pb-10">
    <switchButton text1="Табачный" text2="Бестабачный" v-model:value="type" />
    <div class=" mt-4 flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <p class="text-white/50">Никотин</p>
        <div class="flex justify-between text-white" v-if="type === 'Табачный'">
          <p>До 25</p>
          <p>До 50</p>
        </div>
        <div class="flex justify-between text-white" v-if="type === 'Бестабачный'">
          <p>До 50</p>
          <p>До 100</p>
          <p>До 150</p>
          <p>До 200</p>
        </div>
        <Slider :min="type === 'Табачный' ? 25 : 50" :max="type === 'Табачный' ? 50 : 200"
          :step="type === 'Табачный' ? 25 : 50" v-model="store.nicotine" />
      </div>
      <div class="flex flex-col mt-3">
        <p class="text-white/50 mb-3">Вкус</p>
        <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
          v-for="(item, index) in flavourAdvice" :key="index" @click="addFlavour(item.id)">
          <p>{{ item.name }}</p>
          <img :src="check" v-if="flavour.includes(item.id)" />
        </div>
        <div class="mt-4">
          <p class="text-white/50 mb-3">Порция</p>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(type === 'Табачный' ? 15 : 20)">
            <p>До {{ type === 'Табачный' ? '15' : '20' }}</p>
            <img :src="check" v-if="portion.includes(type === 'Табачный' ? 15 : 20)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(type === 'Табачный' ? 20 : 25)">
            <p>До {{ type === 'Табачный' ? '20' : '25' }}</p>
            <img :src="check" v-if="portion.includes(type === 'Табачный' ? 20 : 25)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addPortion(type === 'Табачный' ? 30 : 35)">
            <p>До {{ type === 'Табачный' ? '30' : '35' }}</p>
            <img :src="check" v-if="portion.includes(type === 'Табачный' ? 30 : 35)" />
          </div>
        </div>
        <div class="mt-4">
          <p class="text-white/50 mb-3">Страна</p>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addCountry(1)">
            <p>Россия</p>
            <img :src="check" v-if="country.includes(1)" />
          </div>
          <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
            @click="addCountry(2)">
            <p>Импорт</p>
            <img :src="check" v-if="country.includes(2)" />
          </div>
        </div>
      </div>
      <div class="flex text-white/80 h-12 items-center duration-300 justify-between mt-4"
        @click="emit('update:currentPage', 'Бренд')">
        <p>Бренд {{ props.brands ? `(выбрано: ${props.brands})` : '' }}</p>
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
</style>