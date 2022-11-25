export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  css: ["@/assets/style/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/globals.scss" as *;`,
        },
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
 
  'graphql-client': {
    clients: {
        default: {
          publicRuntimeConfig : {
              apiToken : process.env.API_KEY
          },
            host: 'https://web-production-c047.up.railway.app/graphql',
            // Basic
            token: process.env.API_KEY,
            // Advanced
           
        }
    }}
});
