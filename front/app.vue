<template>
  <div class="h-[100vh] w-[100vw] bg-slate-600">
    <swiper
        ref="sw"
        :modules="[EffectFade, Autoplay]"
        effect="fade"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay="{
          delay: 5000
        }"
        :speed="2000"
        class="h-full w-full bg-slate-50 swiper"
    >
      <swiper-slide class="bg-green-100">Slide 1</swiper-slide>
      <swiper-slide class="bg-red-200">Slide 2</swiper-slide>
      <swiper-slide class="bg-teal-300">Slide 3</swiper-slide>
      <swiper-slide class="bg-teal-300">Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import {Autoplay, EffectFade, Swiper as ST} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css'
import 'swiper/css/effect-fade';


export default {
  components: {
    Swiper, SwiperSlide
  },
  setup() {
    const onSwiper = (swiper: ST) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change', new Date().getSeconds());
    };
    return {
      onSwiper,
      onSlideChange,
      EffectFade,
      Autoplay,
    };
  }
}
</script>

<style lang="css">
body {
  @apply bg-slate-600
}
</style>