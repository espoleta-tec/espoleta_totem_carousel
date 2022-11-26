<template>
  <div class="h-[100vh] w-[100vw] bg-slate-600 relative">
    <div class="absolute w-full bottom-0 py-8 z-[100]"
         style="backdrop-filter: blur(8px) brightness(0.5)">
      <marquee class="text-white" behavior="" direction="">hello</marquee>
    </div>
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
      <swiper-slide class="bg-green-100" v-for="i in images" :key="i">
        <img class="w-full" :src="`http://localhost:1337${i}`" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import {Autoplay, EffectFade, Swiper as ST} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css'
import 'swiper/css/effect-fade';
import {
  StrapiImage,
  StrapiResponse,
  StrapiResponseData
} from "~/types/strapi-response";


export default {
  components: {
    Swiper, SwiperSlide
  },
  async setup() {
    const {
      data: pictureData,
    } = await useFetch<StrapiResponse>('http://localhost:1337/api/picture', {
      params: {
        populate: ['images']
      }
    })

    let images: string[] = []

    const strapiImages = (pictureData.value!.data as StrapiResponseData).attributes.images.data as StrapiImage[]
    images = strapiImages.map(i => i.attributes.url)

    // const {
    //   data: marqueeData,
    // } = await useFetch<StrapiResponse>('localhost:1337/api/marquees')

    // const marquees = (marqueeData.value!.data as StrapiResponseData[]).map(m => m.attributes.text).join('\t|\t')

    const onSwiper = (swiper: ST) => {
    }
    const onSlideChange = () => {
    }
    return {
      onSwiper,
      onSlideChange,
      EffectFade,
      Autoplay,
      images,
      strapiImages,
    }
  }
}
</script>

<style lang="css">
body {
  @apply bg-black
}
</style>