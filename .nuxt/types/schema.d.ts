import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["graphql-client"]?: typeof import("nuxt-graphql-client").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    "graphql-client": {
        clients: {
             default: {
                   token: {
                          type: string,

                          name: string,

                          value: any,
                   },
             },
        },
    },
  }
  interface PublicRuntimeConfig {
     "graphql-client": {
        clients: {
             default: {
                   token: {
                          type: string,

                          name: string,

                          value: any,
                   },

                   proxyCookies: boolean,

                   tokenStorage: {
                          mode: string,

                          cookieOptions: {
                                  maxAge: number,

                                  secure: boolean,
                          },

                          name: string,
                   },

                   preferGETQueries: boolean,

                   publicRuntimeConfig: {
                          apiToken: string,
                   },

                   host: string,
             },
        },
    },
  }
}