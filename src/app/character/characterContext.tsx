import { createContext, useContext } from 'react'

import { ICharacter } from '@/types/types'

interface CharacterContextType {
  character: ICharacter | null
  setCharacter: (character: ICharacter | null) => void
}

export const CharacterContext = createContext<CharacterContextType | null>(null)

export const useCharacterContext = () => {
  const context = useContext(CharacterContext)
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterContextProvider')
  }
  return context
}
