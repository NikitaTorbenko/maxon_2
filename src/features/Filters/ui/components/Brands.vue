<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { getBrand } from '../../api/getBrand';
import check from 'shared/assets/ico/Check.svg'

const brands = ref()

interface Props {
  brands: number[]
}

const emit = defineEmits(['apply'])
const props = defineProps<Props>()

const getAdviceBrands = async () => {
  const { data, status } = await getBrand()
  if (status === 200) {
    brands.value = data.data
  }
}

onMounted(() => {
  getAdviceBrands()
})
</script>
<template>
  <div class="mt-4">
    <div class="flex text-white/80 border-y border-white/60 h-12 items-center duration-300 justify-between"
      v-for="(item, index) in brands" :key="index" @click="$emit('apply',item.id)">
      <p>{{ item.name_eng }}</p>
      <img :src="check" v-if="props.brands.includes(item.id)" />
    </div>
  </div>
</template>
<style lang='scss'></style>