<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import { EmblaOptionsType } from 'embla-carousel';
import { ref, watch } from "vue";

interface IProps {
  options?: EmblaOptionsType
}

const props = defineProps<IProps>();

const [emblaRef, emblaApi] = emblaCarouselVue(props.options);
const scrollSnaps = ref<number[]>([]);
const selectedIndex = ref(0);

const onDotButtonClick = (index: number) => {
  if (!emblaApi) return;
  selectedIndex.value = index;
  emblaApi.value?.scrollTo(index);
};

const onInit = () => {
  if (!emblaApi.value) return;
  scrollSnaps.value = emblaApi.value?.scrollSnapList();
};

const onSelect = () => {
  if (!emblaApi.value) return;
  selectedIndex.value = emblaApi.value.selectedScrollSnap();
};

watch(emblaApi, () => {
  if (!emblaApi.value) return;
  onInit();
  emblaApi.value.on("reInit", onInit);
  emblaApi.value.on("reInit", onSelect);
  emblaApi.value.on("select", onSelect);
});
</script>
<template>
  <section class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <slot name="slide"></slot>
      </div>
    </div>

    <div className="embla__controls">
      <div className="embla__dots">
        <button
          v-for="(item, index) in scrollSnaps"
          @click="() => onDotButtonClick(index)"
          :key="item"
          class="embla__dot"
          :class="index === selectedIndex ? 'embla__dot--selected' : ''"
        >
        </button>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  gap: 10px;
}
.embla {
  max-width: 48rem;
  margin: auto;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__controls {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
.embla__dots {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}
.embla__dot {
  background-color: #FFC01E;
  opacity: .4;
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: .2s;
}
.embla__dot--selected {
  background-color: #FFC01E;
  opacity: 1;
}
</style>
