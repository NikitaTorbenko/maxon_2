<script setup lang='ts'>
import plus from 'shared/assets/ico/plus.svg'
import minus from 'shared/assets/ico/minus.svg'

interface Props {
    name: string
    price: number
    photo: string
    type: string
}

const props = defineProps<Props>()
</script>
<template>
    <div class="flex gap-2 justify-between mt-7">
        <div>
            <img class="size-10" :src="props.photo" v-if="props.photo" />
            <div v-else class=" size-10 bg-gray-300 flex items-center justify-center">
                <p class="text-xs">Нет фото</p>
            </div>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
            <p class=" text-sm font-normal leading-4 text-[#FFC01E] truncate">{{ props.name }}</p>
            <div class="flex items-center gap-[10px] mt-1">
                <div class=" flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
                    <img :src="minus">
                </div>
                <p class=" font-bold text-sm leading-4 text-white">1</p>
                <div class=" flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
                    <img :src="plus">
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <p class=" text-xs font-normal leading-[14px] text-[#FFC01E] opacity-60 text-end">{{
                props.type === 'snus' ? 'Снюс' : props.type === 'pod' ? 'Под' : 'Жидкость'
            }}</p>
            <p class=" text-sm font-normal leading-4 text-[#FFC01E] mt-2 text-end">{{props.price}} Руб.</p>
        </div>
    </div>

</template>
