import { defineNuxtConfig } from 'nuxt3/dist'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        gtmID: process.env.GTM_ID
    },

    css: [
        '@/assets/css/tailwind.css',
        '@/assets/sass/app.scss',
        '@/assets/fonts/fonts.css'
    ],

    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js")
        }
    }
})
