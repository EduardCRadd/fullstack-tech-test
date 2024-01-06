'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { fetchAllAliveMortyCharacters } from '@/services/rickAndMortyService'

type Props = {
  id: number
  name: string
  gender: string
  species: string
  avatar: string
}

const CharacterCard: FC<Props> = ({ id, name, gender, species, avatar }) => {
  const router = useRouter()

  const redirectToCharacter = () => {
    // console.log(fetchAllAliveMortyCharacters())
    router.push(`/character/${id}`)
  }

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img src={avatar} alt={`${name}`} className="h-full w-full object-cover object-center" />
      </div>
      <div className="py-4 h-[125px] flex flex-col justify-center">
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
      </div>
      <button
        onClick={redirectToCharacter}
        type="button"
        className="w-full bg-[#4CB5C3] px-3.5 py-2.5 text-base font-semibold text-white hover:bg-[#02AFC5]">
        View Profile
      </button>
    </div>
  )
}

export default CharacterCard
