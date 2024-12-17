<script setup lang='ts'>
    import inlineSvg from 'vue-inline-svg'
    import logotype from 'shared/assets/ico/logotype.svg'
</script>
<template lang='html'>
    <div class="flex items-center cursor-pointer">
        <inline-svg class="mr-[6px]" :src="logotype">
        </inline-svg>
        <h1 class="text-2xl font-bold text-primary">logotype</h1>
    </div>
</template>
<style lang='scss'>
        
</style>