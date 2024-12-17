<script setup lang='ts'>
import { ref, watch } from 'vue';
import Slider from 'primevue/slider';
import next from 'shared/assets/ico/forvard_white.svg'

const type = ref('С подзарядкой')
const nicotine = ref(2)
const portion = ref<number[]>([])

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
}

watch(type, () => {
  portion.value = []
})

</script>
<template>
  <div class="pt-5 pb-10">
    <div class=" mt-4 flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <p class="text-white/50">Никотин</p>
        <div class="flex justify-between text-white">
          <p>До 2%</p>
          <p>До 5%</p>
          <p>До 7%</p>
        </div>
        <Slider :min="2" :max="8" v-model="nicotine" />
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