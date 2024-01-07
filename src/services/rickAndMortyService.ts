import { client } from '@/graphql/client'
import { GET_ALIVE_MORTY_CHARACTERS, GET_CHARACTER_BY_ID } from '@/graphql/queries'
import { ICharacter, IEpisode, ILocation } from '@/types/types'

export async function fetchAllAliveMortyCharacters(): Promise<ICharacter[]> {
  let allCharacters: ICharacter[] = []
  let currentPage = 1
  let totalPages = 1

  while (currentPage <= totalPages) {
    const { data } = await client.query({
      query: GET_ALIVE_MORTY_CHARACTERS,
      variables: { page: currentPage },
    })

    const pageCharacters = data.characters.results
      .map(
        (character: any): ICharacter => ({
          ...character,
          avatar: character.image,
          episodes: character.episode.map((ep: any) => ({
            id: ep.id,
            name: ep.name,
          })),
        }),
      )
      .filter((character: ICharacter) => {
        const name = character.name
        return (
          (!name.includes("'s") && !name.includes('’s')) || name.includes("'s Disguise") || name.includes('’s Disguise')
        )
      })

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

export async function fetchLocationById(id: number): Promise<ILocation> {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  const locationData = await response.json()
  return {
    ...locationData,
    noOfResidents: locationData.residents.length,
  }
}

export async function fetchEpisodeById(id: number): Promise<IEpisode> {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const episodeData = await response.json()
  return {
    ...episodeData,
    noOfCharacters: episodeData.characters.length,
    characters: episodeData.characters,
  }
}
