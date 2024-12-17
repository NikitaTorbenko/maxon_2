<script setup lang="ts">
import { Carousel, Slide } from "shared/ui/embla-carousel";
import { offerList } from "../model/lib/offer-list";
import OfferCard from "./components/offer-card.vue";
import { ref, watchEffect } from "vue";

const isSmallScreen = ref(false);

watchEffect(() => {
  isSmallScreen.value = window.innerWidth < 375;
});

</script>
<template>
  <div>
    <h2 class="text-2xl font-bold text-primary mb-6 text-center">
      Специальные предложения
    </h2>
    <Carousel
      class="max-[375px]:w-[260px]"
      :options="{
        skipSnaps: true,
        align: 'start',
        slidesToScroll: isSmallScreen ? 3 : 4,
      }"
    >
      <template #slide>
        <Slide v-for="(offer, index) in offerList">
          <OfferCard
            :key="index"
            :link="offer.link"
            :icon="offer.icon"
            :title="offer.title"
          />
        </Slide>
      </template>
    </Carousel>
  </div>
</template>
<style lang="css"></style>
