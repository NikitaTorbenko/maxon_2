<script setup lang="ts">
import likeSvg from "shared/assets/ico/like.svg";
import dislikeSvg from 'shared/assets/ico/dislike.svg'
import InlineSvg from "vue-inline-svg";
import { addFavorite } from '../../../widgets/product-list/api/addFavorite';
import { deleteFavorite } from '../../../widgets/product-list/api/deleteFavorite';

interface Props {
  id: string
  favorite: boolean
  cart: boolean
}

interface Emits {
  (emit: 'update:favorite', value: boolean): void
  (emit: 'update:cart', value: boolean): void
}

const emit = defineEmits<Emits>()

const props = defineProps<Props>()

const toggleLike = async (id: string) => {
  emit('update:favorite', !props.favorite)
  if (props.favorite === false) {
    await addFavorite(id)
  } else {
    await deleteFavorite(id)
  }
}
</script>
<template>
  <div>
    <div @click="toggleLike(props.id)" class="board w-12 h-12 flex items-center justify-center cursor-pointer">
      <inline-svg class="duration-300 hover:opacity-70" :src="props.favorite ? dislikeSvg : likeSvg" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.board {
  background:
    linear-gradient(145.86deg, #ff61c7 -5.59%, #fe9900 129.56%);
  border-radius: 0 0 16px 0;
}
</style>
