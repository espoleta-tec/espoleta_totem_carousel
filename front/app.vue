<!--suppress ALL -->
<template>
  <div class="h-[100vh] w-[100vw] bg-slate-600 relative">
    <div class="absolute w-full bottom-0 py-8 z-[100] holder text-white"
         style="backdrop-filter: blur(16px) brightness(0.5)">
      <div class="news" v-html="marquees">
      </div>
    </div>
    <swiper
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
        <img class="w-full h-full" :src="`http://localhost:1337${i}`" alt="">
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
} from "~/types/strapi-response"


export default {
  components: {
    Swiper, SwiperSlide
  },
  async setup() {
    const [{data: picture,}, {data: marquee, error}] = await Promise.all([
      useFetch<StrapiResponse>('http://localhost:1337/api/picture?populate=images'),
      useFetch<StrapiResponse>('http://localhost:1337/api/marquees')
    ])


    let images: string[] = []

    const strapiImages = (picture.value!.data as StrapiResponseData).attributes.images.data as StrapiImage[]
    images = strapiImages.map(i => i.attributes.url)
    const marquees = (marquee.value?.data as StrapiResponseData[])?.map(m => `<span>
${m.attributes.text}
    </span>`).join(`<div class="px-4 text-center"><div class="w-[1px] h-[24px] bg-white"></div></div>`)


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
      marquees,
    }
  }
}
</script>

<style lang="css">
body {
  @apply bg-black
}

.holder {
  overflow: hidden;
}

.news {
  animation: slide 20s linear infinite;
  display: flex;
  flex-direction: row;
  align-items: center;
}

@keyframes slide {
  0% {
    transform: translatex(100%)
  }

  100% {
    transform: translatex(-100%)
  }
}
</style>