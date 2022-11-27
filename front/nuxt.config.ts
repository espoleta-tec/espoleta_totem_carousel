import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
    ],
    runtimeConfig: {
        API_URL: process.env.API_URL
    },
    tailwindcss: {
        config: tailwindConfig
    }
})
