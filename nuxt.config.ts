import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    autoImports: {
        dirs: ['./generated'],
        imports: [
            ...[
                'useQuery',
                'useLazyQuery',
                'useMutation',
                'useSubscription',
                'useApolloClient',
            ].map((name) => ({ name, from: '@vue/apollo-composable' })),
        ],
    },
})
