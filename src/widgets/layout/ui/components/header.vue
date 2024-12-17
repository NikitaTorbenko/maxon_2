<script setup lang="ts">
import { useRouter } from "vue-router";
import Logotype from "./other/logotype.vue";
import navbar from "./other/navbar.vue";

interface IProps {
  isShowUsername: boolean;
}

const props = defineProps<IProps>();

const router = useRouter();
</script>
<template>
  <div class="flex items-center justify-between">
    <div>
      <Logotype :onclick="() => router.push({ path: '/' })" />
      <div class="mt-2">
        <p v-if="props.isShowUsername" class="text-sm font-normal text-[#AAAAAA]">@operator_name</ p>
      </div>
    </div>
    <navbar :cart-total="11" />
  </div>
</template>
<style lang="scss"></style>
