import { client } from '@/graphql/client'
import { GET_ALIVE_MORTY_CHARACTERS } from '@/graphql/queries'
import { ICharacter } from '@/types/types'

export const fetchAliveMortyCharacters = async () => {
  const { data } = await client.query({
    query: GET_ALIVE_MORTY_CHARACTERS,
  })

  return data.characters.results.map(
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
        noOfCharacters: ep.characters.length,
      })),
    }),
  )
}
