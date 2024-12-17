<script setup lang="ts">
interface IProps {
  icon: string;
  title: string;
  link: string;
}

const props = defineProps<IProps>();

</script>
<template>
  <div class="flex flex-col w-20">
    <div class="border-gradient w-[68px] h-[68px] flex items-center justify-center before:rounded-2xl">
      <img :src="props.icon" alt="" />
    </div>
    <div class="w-full text-center mt-2">
      <p class="leading-4 text-xs font-normal text-white">{{
        props.title
      }}</p>
    </div>
  </div>
</template>
<style scoped></style>
