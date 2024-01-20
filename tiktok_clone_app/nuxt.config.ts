// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages:true,
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: [
        'nuxt-icon',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
