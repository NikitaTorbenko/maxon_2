<script setup lang="ts"></script>
<template>
  <div class="embla__slide">
    <div class="embla__slide__number">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.embla__slide {
  width: 100%;
  user-select: none;
  pointer-events: none;
}
.embla__slide__number {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;
}
</style>
