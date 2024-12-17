<script setup lang="ts">
import headerApp from "./components/header.vue";
interface IProps {
  isEffectBackground?: boolean;
  isShowUsername?: boolean;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="relative w-full max-w-[375px] mx-auto px-3">
    <div v-if="props.isEffectBackground"
      class="absolute z-10 -top-48 -left-48 w-[360px] h-[404px] opacity-60 blur-[90px] rounded-full effect"></div>
    <header-app :is-show-username="props.isShowUsername" class="relative pt-10 z-30" />
    <div class="relative z-30 pb-10">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.effect {
  background: #058ab5;
}
</style>
