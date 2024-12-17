<script setup lang="ts">
import forwardSVG from "shared/assets/ico/forward.svg";
import { ref, onMounted } from 'vue';
import InlineSvg from "vue-inline-svg";
import { layout } from "widgets/layout";
import { getProfile } from '../api/profileService';

const userData = ref()

const fetchProfile = async () => {
  const { data, status } = await getProfile()
  if (status === 200) {
    userData.value = data.data
  }
}

onMounted(() => {
  fetchProfile()
})
</script>
<template>
  <div>
    <layout is-show-username>
      <h2
        class="mt-6 text-xl font-bold text-primary uppercase w-full flex justify-center font-oswald"
      >
        Личный кабинет
      </h2>
      <div
        class="mt-3 flex justify-between text-sm font-normal text-primary opacity-60"
        v-if="userData"
      >
        <p>{{ userData.tg_tag }}</p>
        <p>ID: {{ userData.id }}</p>
      </div>
      <div class="mt-8">
        <RouterLink
          class="h-14 flex justify-between items-center duration-300 hover:px-3"
          to="/orders"
        >
          <p class="text-sm font-normal text-primary">Заказы</p>
          <InlineSvg :src="forwardSVG" />
        </RouterLink>
        <RouterLink
          class="h-14 flex justify-between items-center duration-300 hover:px-3"
          to="/adress"
        >
          <p class="text-sm font-normal text-primary">Адреса</p>
          <InlineSvg :src="forwardSVG" />
        </RouterLink>
        <RouterLink
          class="h-14 flex justify-between items-center duration-300 hover:px-3"
          to="/condition"
        >
          <p class="text-sm font-normal text-primary">Персональные условия</p>
          <InlineSvg :src="forwardSVG" />
        </RouterLink>
        <RouterLink
          class="h-14 flex justify-between items-center duration-300 hover:px-3"
          to="/orders"
        >
          <p class="text-sm font-normal text-primary">Статистика</p>
          <InlineSvg :src="forwardSVG" />
        </RouterLink>
      </div>
    </layout>
  </div>
</template>
<style lang="scss"></style>
