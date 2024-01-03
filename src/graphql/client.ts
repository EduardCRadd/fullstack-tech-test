import { ApolloClient, InMemoryCache } from '@apollo/client'

// Initialize Apollo Client with the Rick and Morty GraphQL API endpoint
export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})
