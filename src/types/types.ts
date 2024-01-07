export interface ICharacterCore {
  id: number
  name: string
  status: string
  species: string
  gender: string
  avatar: string
}

export interface ICharacter extends ICharacterCore {
  origin: ILocation
  location: ILocation
  episodes: IEpisode[]
}

export interface ILocation {
  id: number
  name: string
  type: string
  noOfResidents: number
  residents: string[]
  dimension: string
}

export interface IEpisode {
  id: number
  name: string
  airDate: string
  noOfCharacters: number
  characters: string[]
  episode: string
}
