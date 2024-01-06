'use client'

import { useEffect, useState } from 'react'

import CharacterCard from '@/components/characterCard/CharacterCard'
import { fetchAllAliveMortyCharacters } from '@/services/rickAndMortyService'
import { ICharacter } from '@/types/types'

export default function Home() {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const fetchedCharacters = await fetchAllAliveMortyCharacters()
      setCharacters(fetchedCharacters)
    }

    fetchCharacters()
  }, [])

  return (
    <main className="relative w-full h-full">
      <div className="bg-tertiary h-[35%] flex justify-center items-center">
        <h1 className="text-5xl font-semibold mt-0 md:-mt-20">Rick and Morty</h1>
      </div>

      <div className="mt-0 md:-mt-48">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-28 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
            {characters.map((character) => (
              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                gender={character.gender}
                species={character.species}
                avatar={character.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
