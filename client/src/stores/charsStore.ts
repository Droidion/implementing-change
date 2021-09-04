import { defineStore } from 'pinia'
import { characters } from '../scenario/characters'
import type { Character, CharDynamics } from '../types/Character'

export interface CharsState {
  chars: CharDynamics[]
}

function isActiveSupport(support: number): boolean {
  return support >= 50
}

function isModerateSupport(support: number): boolean {
  return support >= 0 && support < 50
}

export const useCharsStore = defineStore('chars', {
  state() {
    return { chars: [] } as CharsState
  },

  actions: {
    /** Инициализирует начальное состояние персонажей из файла сценария */
    initStateFromScenario() {
      this.chars = characters.map((char: Character) => {
        return {
          id: char.id,
          initialSupport: char.support,
          currentSupport: char.support,
          changeHistory: [],
        }
      })
    },
  },
  getters: {
    currentActiveSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isActiveSupport(val.currentSupport) ? ++acc : acc), 0),
    currentModerateSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isModerateSupport(val.currentSupport) ? ++acc : acc), 0),
    initialActiveSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isActiveSupport(val.initialSupport) ? ++acc : acc), 0),
    initialModerateSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isModerateSupport(val.initialSupport) ? ++acc : acc), 0),
    activeSupportChange(): number {
      return this.currentActiveSupport - this.initialActiveSupport
    },
    moderateSupportChange(): number {
      return this.currentModerateSupport - this.initialModerateSupport
    },
  },
})
