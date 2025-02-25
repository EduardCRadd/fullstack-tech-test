'use client'

import { useEffect, useState } from 'react'

import { fetchCharacterById, fetchEpisodeById, fetchLocationById } from '@/services/rickAndMortyService'
import { ICharacter, IEpisode, ILocation } from '@/types/types'

export default function Character({ params }: { params: { characterId: string } }) {
  const [character, setCharacter] = useState<ICharacter | null>(null)
  const [location, setLocation] = useState<ILocation | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const characterId = params.characterId

  useEffect(() => {
    const fetchCharacterAndLocation = async () => {
      setIsLoading(true)
      try {
        const fetchedCharacter = await fetchCharacterById(characterId)
        setCharacter(fetchedCharacter)

        const episodes = fetchedCharacter.episodes
        if (episodes.length > 0) {
          const firstEpisodeId = episodes[0].id
          const fetchedFirstEpisode = await fetchEpisodeById(firstEpisodeId)

          let updatedEpisodes: IEpisode[]
          if (episodes.length === 1) {
            // Only one episode, so no need to fetch the last episode separately
            updatedEpisodes = [{ ...fetchedFirstEpisode, ...episodes[0] }]
          } else {
            // Multiple episodes, so fetch both the first and the last
            const lastEpisodeId = episodes[episodes.length - 1].id
            const fetchedLastEpisode = await fetchEpisodeById(lastEpisodeId)

            updatedEpisodes = [
              { ...fetchedFirstEpisode, ...episodes[0] },
              ...episodes.slice(1, -1),
              { ...fetchedLastEpisode, ...episodes[episodes.length - 1] },
            ]
          }

          // Update the character state with detailed episode information
          setCharacter((prevCharacter) => {
            if (!prevCharacter) return null
            return {
              ...prevCharacter,
              episodes: updatedEpisodes,
            }
          })
        }

        const fetchedLocation = await fetchLocationById(fetchedCharacter.location.id)
        setLocation(fetchedLocation)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (characterId) {
      fetchCharacterAndLocation()
    }
  }, [characterId])

  if (isLoading) {
    return <div className="w-full h-full flex justify-center items-center text-xl font-bold">Loading...</div>
  }

  if (!character) {
    return <div className="w-full h-full flex justify-center items-center text-xl font-bold">Character not found.</div>
  }

  if (!location) {
    return (
      <div className="w-full h-full flex justify-center items-center text-xl font-bold">
        Loading location details...
      </div>
    )
  }

  const { name, status, origin, avatar, episodes } = character
  const firstEpisode = episodes[0]
  const lastEpisode = episodes[episodes.length - 1]
  // console.log(character)

  return (
    <main className="relative w-full h-full">
      <div className="w-full h-[800px] md:h-[500px] bg-tertiary p-14">
        <h1 className="text-5xl font-semibold text-center md:text-left">Rick and Morty</h1>

        <div className="pt-10 text-xl text-center md:text-left">
          <a href="/">&#x3c; Back to character listing</a>
        </div>

        <div className="flex flex-col items-center md:flex-row text-center md:text-left transform -translate-y-[-100px]">
          <div className="pr-0 md:pr-16 pb-10 md:pb-0">
            <img className="inline-block h-64 w-64 rounded-full" src={avatar} alt={name} />
          </div>
          <div className="text-xl font-medium">
            <h2 className="text-5xl font-semibold text-center md:text-left whitespace-nowrap pb-8">{name}</h2>
            <p>Status: {status}</p>
            <p>Origin: {origin.name}</p>
          </div>
        </div>
      </div>

      <div className="text-lg mt-6 md:mt-32 p-14">
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center md:text-left pb-4">Location Details:</h3>
          <p>Name: {location.name}</p>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>No. of Residents: {location.noOfResidents}</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center md:text-left pb-4">
            Episodes (ep. appearance count: {episodes.length})
          </h3>
          <p>
            First appearance: {firstEpisode.name} {firstEpisode.episode}
          </p>
          <p>First appearance air date: {firstEpisode.airDate}</p>
          <p>First appearance character count: {firstEpisode.noOfCharacters}</p>
          <br />
          <p>
            Last appearance: {lastEpisode.name} {lastEpisode.episode}
          </p>
          <p>Last appearance air date: {lastEpisode.airDate}</p>
          <p>Last appearance character count: {lastEpisode.noOfCharacters}</p>
        </div>
      </div>
    </main>
  )
}
