import tailwindConfig from "./tailwind.config";
import 'dotenv/config'

export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL
        }
    },
    tailwindcss: {
        config: tailwindConfig
    }
})
