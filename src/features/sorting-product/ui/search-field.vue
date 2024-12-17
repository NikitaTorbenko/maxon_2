<script setup lang="ts">
import searchIcon from "shared/assets/ico/search.svg";
import filterIcon from "shared/assets/ico/filter.svg";
import inlineSvg from "vue-inline-svg";
import { useSearchStore } from "features/Filters/model/filtersStore";


interface Emits {
  (emit: 'update:isOpenFilters', value: boolean): void
}

const store = useSearchStore()

const emit = defineEmits<Emits>()
</script>
<template>
  <div>
    <div class="border-gradient flex gap-3 px-4 py-2 before:rounded-md before:p-[2.6px]">
      <div @click="emit('update:isOpenFilters', true)" class="z-20">
        <inline-svg :src="filterIcon" />
      </div>

      <input placeholder="Найти"
        class="z-10 bg-transparent text-sm font-normal w-full outline-none text-primary placeholder:text-primary placeholder:opacity-40"
        type="text" :value="store.searchValue" @input="(e: any) => store.searchValue = e.target.value" />
      <inline-svg :src="searchIcon" />
    </div>
  </div>
</template>
<style lang="scss"></style>
