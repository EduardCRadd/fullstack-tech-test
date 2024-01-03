'use client'

import CharacterCard from '@/components/characterCard/CharacterCard'

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <div className="bg-tertiary h-[35%] flex justify-center items-center">
        <h1 className="text-5xl font-semibold mt-0 md:-mt-20">Rick and Morty</h1>
      </div>

      <div className="mt-0 md:-mt-48">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-28 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
          </div>
        </div>
      </div>
    </main>
  )
}
