<script setup lang='ts'>
import back from 'shared/assets/ico/back.svg'
import { ItemOrder } from 'shared/ui/ItemsOrder';
import { useRouter } from 'vue-router';
import { layout } from "widgets/layout";
import { getOrders } from '../api/ordersService';
import { onMounted, ref } from 'vue';


const router = useRouter()

const orders = ref<any[]>([])

const fetchOrders = async () => {
    const { data, status } = await getOrders()
    if (status === 200) {
        orders.value = data.data
    }
}

onMounted(() => {
    fetchOrders()
})
</script>
<template>
    <layout is-effect-background class="h-screen">
        <div class="flex items-center mt-5 cursor-pointer">
            <img :src="back" class=" w-10 h-10" @click="router.go(-1)" />
            <h2 class=" font-bold text-xl leading-[29px] text-[#FFC01E] w-[74px] h-[30px] ">ЗАКАЗЫ</h2>
        </div>
        <div>
            <p class=" font-normal text-sm leading-4 text-[#FFFFFF] text-center mt-28" v-if="orders.length === 0">История заказов
                пуста.<br>Перейдите в каталог и начните покупки</p>
        </div>
        <div v-if="orders.length > 0" class="mt-4 flex flex-col gap-3">
            <ItemOrder v-for="(item, index) in orders" :key="index" :date="item.date" :name="item.products.name" :photo="item.products.photo" :type="item.products.type"/>
        </div>
        <div class=" fixed left-0 bottom-4 w-full flex items-center justify-center">
            <Button class=" bg-[#FFC01E] w-[90%] text-white h-[51px]" @click="router.push('/')">В каталог</Button>
        </div>
    </layout>
</template>
<style lang='scss'></style>