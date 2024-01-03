import { gql } from '@apollo/client'

export const GET_ALIVE_MORTY_CHARACTERS = gql`
  query GetAliveMortyCharacters {
    characters(filter: { name: "Morty", status: "Alive" }) {
      results {
        id
        name
        status
        species
        gender
        image
        origin {
          id
          name
          type
          dimension
        }
        location {
          id
          name
          type
          dimension
        }
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  }
`
