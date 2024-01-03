'use client'

import { useRouter } from 'next/navigation'

export default function CharacterCard() {
  const router = useRouter()

  const redirectToCharacter = () => {
    router.push('/character')
  }

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="py-4">
        <p>Name: (name)</p>
        <p>Gender: (gender)</p>
        <p>Species: (species)</p>
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
