<script setup lang="ts">
import { ref } from "vue";
import { IBreadCrumb } from "../model/types/types";
interface IProps {
  values: IBreadCrumb[];
  defaultSelected: number,
}

const props = defineProps<IProps>();

const selectedIndex = ref(props.defaultSelected);
</script>
<template>
  <div class="flex">
    <div
      class="flex text-sm font-normal"
      v-for="(bread, index) in props.values"
    >
      <a class="duration-300 cursor-pointer" :class="selectedIndex === index ? 'opacity-100 text-white' : 'text-white opacity-50'" @click="selectedIndex = index">{{ bread.title }}</a>
      <p class="text-white opacity-50 mx-2" v-if="index !== props.values.length-1">/</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
