import { client } from '@/graphql/client'
import { GET_ALIVE_MORTY_CHARACTERS, GET_CHARACTER_BY_ID } from '@/graphql/queries'
import { ICharacter } from '@/types/types'

export async function fetchAllAliveMortyCharacters(): Promise<ICharacter[]> {
  let allCharacters: ICharacter[] = []
  let currentPage = 1
  let totalPages = 1

  while (currentPage <= totalPages) {
    const { data } = await client.query({
      query: GET_ALIVE_MORTY_CHARACTERS,
      variables: { page: currentPage },
    })

    const pageCharacters = data.characters.results.map(
      (character: any): ICharacter => ({
        ...character,
        avatar: character.image,
        origin: {
          ...character.origin,
        },
        location: {
          ...character.location,
        },
        episodes: character.episode.map((ep: any) => ({
          id: ep.id,
          name: ep.name,
          airDate: ep.air_date,
          episode: ep.episode,
          noOfCharacters: ep.count,
        })),
      }),
    )

    allCharacters = allCharacters.concat(pageCharacters)
    totalPages = data.characters.info.pages
    currentPage++
  }

  return allCharacters
}

export async function fetchCharacterById(id: string): Promise<ICharacter> {
  const { data } = await client.query({
    query: GET_CHARACTER_BY_ID,
    variables: { id },
  })

  if (data.character) {
    const character = data.character
    return {
      ...character,
      avatar: character.image,
      origin: {
        ...character.origin,
      },
      location: {
        ...character.location,
      },
      episodes: character.episode.map((ep: any) => ({
        id: ep.id,
        name: ep.name,
        airDate: ep.air_date,
        episode: ep.episode,
        noOfCharacters: ep.characters?.length || 0,
      })),
    }
  } else {
    throw new Error('Character not found')
  }
}
