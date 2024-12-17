<script setup lang='ts'>
interface Props {
  value: string
  text1: string
  text2: string
}

interface Emits {
  (emit: 'update:value', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

</script>
<template>
  <div class="bg-white/10 rounded-[10px] flex h-14 justify-between p-2 gap-2">
    <div class="w-[48%] flex items-center justify-center text-white rounded-[10px] duration-300 cursor-pointer"
      @click="emit('update:value', text1)" :class="props.value === text1 ? 'bg-primary' : 'bg-transparent'">
      <p>{{ props.text1 }}</p>
    </div>
    <div class="w-[48%] flex items-center justify-center text-white rounded-[10px] duration-300 cursor-pointer"
      @click="emit('update:value', text2)" :class="props.value === text2 ? 'bg-primary' : 'bg-transparent'">
      <p>{{ props.text2 }}</p>
    </div>
  </div>
</template>
<style lang='scss'></style>