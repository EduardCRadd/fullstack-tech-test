'use client'

import { useEffect, useState } from 'react'

import { fetchCharacterById } from '@/services/rickAndMortyService'
import { ICharacter } from '@/types/types'

export default function Character({ params }: { params: { characterId: string } }) {
  const [character, setCharacter] = useState<ICharacter | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const characterId = params.characterId

  useEffect(() => {
    if (characterId) {
      const fetchCharacter = async () => {
        setIsLoading(true)
        try {
          const fetchedCharacter = await fetchCharacterById(characterId)
          setCharacter(fetchedCharacter)
        } catch (error) {
          console.error('Error fetching character:', error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchCharacter()
    }
  }, [characterId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!character) {
    return <div>Character not found.</div>
  }

  const { name, status, origin, avatar, episodes, location } = character
  const firstEpisode = episodes[0]
  const lastEpisode = episodes[episodes.length - 1]

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
          <h3 className="text-3xl font-semibold text-center md:text-left pb-4">Episodes (ep. appearance count)</h3>
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
