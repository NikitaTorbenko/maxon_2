<script setup lang="ts">
import incrementSVG from "shared/assets/ico/increment.svg";
import dicrementSVG from 'shared/assets/ico/dicrement.svg'
import InlineSvg from "vue-inline-svg";
import {ref} from 'vue'
import { addBasket } from '../api/addBasketService';

const isCart = ref(false)

interface Emit {
  (emit: 'update:cart', value: boolean): void
}

interface Props {
  cart: boolean
  id: string
}


const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const toggleCart = async (id: string) => {
  if (props.cart) {
    emit('update:cart', false)
  } else {
    emit('update:cart', true)
    await addBasket(id)
  }
  isCart.value = !isCart.value
}


</script>
<template>
  <div>
    <div
      @click="toggleCart(props.id)"
      :class="props.cart ? 'opacity-50' : ''"
      class="w-[71px] h-12 bg-primary border-rounded flex items-center justify-center cursor-pointer duration-300 hover:opacity-80"
    >
      <inline-svg :src="props.cart ? dicrementSVG : incrementSVG" />
    </div>
  </div>
</template>
<style lang="scss">
.border-rounded {
  border-radius: 16px 0 0 0;
}
</style>
