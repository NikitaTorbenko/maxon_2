<script setup lang='ts'>
    import back from 'shared/assets/ico/back.svg'
    import { useRouter } from 'vue-router';
    import { layout } from "widgets/layout";
    import Delete from 'shared/assets/ico/Delete.svg'

    const router = useRouter()
</script>
<template>
    <layout is-effect-background class="h-screen">
        <div class="flex items-center mt-5 cursor-pointer">
            <img :src="back" class=" w-10 h-10" @click="router.go(-1)"/>
            <h2 class=" font-bold text-xl leading-[29px] text-[#FFC01E] w-[74px] h-[30px] ">АДРЕСА</h2>
        </div>
        <div>
            <p class=" font-normal text-sm leading-4 text-[#FFFFFF] text-center mt-28">Нет добавленных адресов</p>
        </div>
        <div class="flex w-[90vw] justify-between items-center">
            <p class=" font-normal text-sm leading-4 text-white w-[300px] truncate">Гидротехническая улица, 23, подъезд 8, кв. 3</p>
            <img :src="Delete" class=" w-[20px] h-[20px] cursor-pointer"/>
        </div>
        <div class=" fixed left-0 bottom-4 w-full flex items-center justify-center">
            <Button class=" bg-[#FFC01E] w-[90%] text-white h-[51px]">Добавить новый адрес</Button>
        </div>
    </layout>
</template>
<style lang='scss'>
        
</style>