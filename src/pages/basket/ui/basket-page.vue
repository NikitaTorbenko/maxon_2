<script setup lang="ts">
import { useRouter } from "vue-router";
import { layout } from "widgets/layout";
import tochki from "shared/assets/ico/3 tochki.svg";
import { ItemBasket } from "shared/ui/ItemsBasket";
import strelka from "shared/assets/ico/back.svg";
import { ref, onMounted } from 'vue';
import { getBasket } from '../api/basketService';

const router = useRouter();
const products = ref()
const basketData = ref()

const fetchBasket = async () => {
  const { data, status } = await getBasket()
  if (status === 200) {
    products.value = data.data.products
    basketData.value = data.data
  }
}

onMounted(() => {
  fetchBasket()
})
</script>
<template>
  <layout is-effect-background class="h-screen">
    <div class="flex justify-between items-center mt-5">
      <h2 class="font-bold text-xl leading-[29px] text-[#FFC01E] w-[74px] h-[30px]">
        КОРЗИНА
      </h2>
      <img :src="tochki" class="cursor-pointer" />
    </div>
    <!-- <div class="flex justify-center items-center w-full">
            <p class=" font-normal text-sm leading-4 text-[#FFFFFF] text-center mt-28">Корзина  пока пуста.<br>
                Перейдите в каталог и выберите<br>интересующий товар</p>
        </div> -->
    <!-- <div class=" fixed left-0 bottom-4 w-full flex items-center justify-center">
            <Button class=" bg-[#FFC01E] w-[90%] text-white h-[51px]">Каталог</Button>
        </div> -->
    <ItemBasket v-for="(item, index) in products" :key="index" :name="item.name" :photo="item.photo" :price="item.price" :type="item.type" />
    <div class="flex justify-between mt-12">
      <input class="border border-[#FFC01E] rounded w-[188px] h-[43px] bg-bg-secondary pl-5 text-[#FFF]"
        placeholder="Промокод" />
      <button class="bg-[#FFC01E] w-[147px] h-[43px] text-white rounded hover:bg-[#FFA41C] duration-300">
        Применить
      </button>
    </div>
    <div class="mt-[32px]">
      <p class="font-normal text-sm leading-4 text-white opacity-40">
        Получатель
      </p>
      <input class="border border-[#FFC01E] rounded bg-bg-secondary pl-5 text-[#FFF] w-full mt-2 h-8"
        placeholder="Введите имя" />
    </div>
    <div class="mt-[12px]">
      <p class="font-normal text-sm leading-4 text-white opacity-40">
        Контактный телефон
      </p>
      <input class="border border-[#FFC01E] rounded bg-bg-secondary pl-5 text-[#FFF] w-full mt-2 h-8"
        placeholder="+7 (000) - 000 - 00 - 00" />
    </div>
    <div>
      <p class="font-normal text-sm leading-4 text-white opacity-40 mt-[42px]">
        Адрес доставки
      </p>
    </div>
    <div class="flex items-center justify-between mt-[28px]">
      <p class="font-normal text-sm leading-4 text-[#C31515]">Не выбран</p>
      <img :src="strelka" class="w-[24px] h-[24px] rotate-180 cursor-pointer" />
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <div class="flex justify-between">
        <p class="font-normal text-sm leading-4 text-white opacity-40">
          Количество товаров
        </p>
        <p v-if="basketData" class="font-normal text-sm leading-4 text-white opacity-40">{{basketData.count.length}} шт.</p>
      </div>
      <div class="flex justify-between">
        <p class="font-normal text-sm leading-4 text-white opacity-40">
          Скидка
        </p>
        <p class="font-normal text-sm leading-4 text-white opacity-40">
          0 руб.
        </p>
      </div>
      <div class="flex justify-between">
        <p class="font-normal text-sm leading-4 text-white opacity-40">
          Стоимость доставки
        </p>
        <p class="font-normal text-sm leading-4 text-[#C31515]">
          Адрес не задан
        </p>
      </div>
      <div class="flex justify-between">
        <p class="font-bold text-base leading-[18px] text-white">Сумма</p>
        <p class="font-bold text-base leading-[18px] text-white" v-if="basketData">{{basketData.sum}} руб.</p>
      </div>
    </div>
    <button class="bg-[#FFFFFF1A] w-full h-[43px] text-white rounded mt-[34px] hover:bg-[#FFC01E] duration-300">
      Оформить заказ
    </button>
  </layout>
</template>
<style lang="scss"></style>
