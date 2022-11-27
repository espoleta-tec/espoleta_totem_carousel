<!--suppress ALL -->
<template>
  <div class="h-[100vh] w-[100vw] bg-slate-600 relative">
    <div class="absolute w-full bottom-0 py-8 z-[100] holder text-white"
         style="backdrop-filter: blur(16px) brightness(0.5)">
      <marquee
          v-html="marquees">
      </marquee>
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
        <img style="object-fit: cover" class="w-full h-full"
             :src="`${apiUrl}${i}`" alt=""/>
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
import {useRuntimeConfig} from "#app";
import {useHead} from "#imports";


export default {
  components: {
    Swiper, SwiperSlide
  },
  async setup() {
    const news = ref<HTMLElement | null>(null)

    const apiBase = useRuntimeConfig().public.apiBase

    useHead({
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    })

    const [{data: picture, error: perror}, {
      data: marquee,
      error: merror
    }] = await Promise.all([
      useFetch<StrapiResponse>(`${apiBase}/api/picture?populate=images`),
      useFetch<StrapiResponse>(`${apiBase}/api/marquees`)
    ])


    let images: string[] = []

    const strapiImages = (picture.value!.data as StrapiResponseData).attributes.images.data as StrapiImage[]
    images = strapiImages.map(i => i.attributes.url)
    let marquees = (marquee.value?.data as StrapiResponseData[])?.map(m => `<span>
${m.attributes.text}
    </span>`).join(`<div class="px-4 text-center"><div class="w-[1px] h-[24px] bg-white"></div></div>`)

    marquees = `<div class="flex flex-row items-center">
${marquees}
</div>`

    const newsCls = computed(() => {
      if (!news.value) return null

      news.value.clientLeft
    })

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
      news,
      apiUrl: apiBase
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
}

@keyframes slide {
  0% {
    transform: translatex(200%)
  }

  100% {
    transform: translatex(-100%)
  }
}
</style>