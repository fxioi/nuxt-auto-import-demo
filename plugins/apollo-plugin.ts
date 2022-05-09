import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    provide(
      DefaultApolloClient,
      new ApolloClient({
        link: createHttpLink({
          uri: 'http://localhost:3000/graphql',
        }),
        cache: new InMemoryCache(),
      })
    )
  })
})
