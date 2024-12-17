<script setup lang="ts">
interface IProps {
  title: string;
  icon: string;
  classBox?: string;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="relative rounded-2xl w-28 h-28 max-[370px]:w-24 max-[370px]:h-24 cursor-pointer duration-300 hover:opacity-70" :class="props.classBox">
    <span class="absolute top-2 left-2 text-sm font-bold text-white  max-[370px]:text-xs">{{
      props.title
    }}</span>
    <img
      :src="props.icon"
      alt="icon category"
      class="absolute bottom-0 right-1"
    />
  </div>
</template>
<style lang="scss"></style>
