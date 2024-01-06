import { gql } from '@apollo/client'

export const GET_ALIVE_MORTY_CHARACTERS = gql`
  query GetAliveMortyCharacters($page: Int) {
    characters(page: $page, filter: { name: "Morty", status: "alive" }) {
      info {
        count
        pages
        next
        prev
      }
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

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
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
`
