<script setup lang='ts'>
import dayjs from 'dayjs';
import Item from 'shared/assets/test/Rectangle 16.jpg'


interface Props {
    name: string
    date: number
    photo: string
    type: string
}

const props = defineProps<Props>()
</script>
<template>
    <div class="flex gap-2 justify-between">
        <div>
            <img class="size-10" :src="props.photo" v-if="props.photo" />
            <div v-else class=" size-10 bg-gray-300 flex items-center justify-center">
                <p class="text-xs">Нет фото</p>
            </div>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
            <p class=" text-sm font-normal leading-4 text-[#FFC01E] truncate">{{props.name}}</p>
            <p class=" text-sm font-normal leading-4 text-[#26C323] mt-2">Доставлен: {{dayjs.unix(props.date).format('DD.MM.YYYY')}}</p>
        </div>
        <div class="flex flex-col">
            <p class=" text-xs font-normal leading-[14px] text-[#FFC01E] opacity-60 text-end">{{
                props.type === 'snus' ? 'Снюс' : props.type === 'pod' ? 'Под' : 'Жидкость'
            }}</p>
            <p class=" text-sm font-normal leading-4 text-[#FFC01E] mt-2 text-end">Оценить</p>
        </div>
    </div>

</template>
