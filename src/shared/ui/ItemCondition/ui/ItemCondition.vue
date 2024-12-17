<script setup lang='ts'>
import Procent from 'shared/assets/ico/procent.svg'
import Vector from 'shared/assets/ico/back.svg'
    
</script>
<template>
    <div class="flex gap-2 justify-between">
        <div>
            <img :src="Procent"/>
        </div>
        <div class="flex flex-col w-[200px] mr-6">
            <p class=" text-sm font-bold leading-4 text-white truncate">-10% на товары от ARQ</p>
            <p class=" text-sm font-normal leading-4 opacity-50 text-[#FFC01E] mt-2">на сумму от 1000 ₽ </p>
        </div>
        <div>
            <img :src="Vector" class=" rotate-180 cursor-pointer"/>
        </div>
    </div>
</template>
<style lang='scss'>
        
</style>