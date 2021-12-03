import { defineStore } from 'pinia'
import { characters } from '../scenario/characters'
import type { Character, CharDynamics } from '../types/Character'

export interface CharsState {
  chars: CharDynamics[]
}

/**
 * Возвращает статус активной поддержки
 * @param support Численное значение поддержки
 * @return Является ли поддержка активной
 */
function isActiveSupport(support: number): boolean {
  return support >= 50
}

/**
 * Возвращает статус умеренный поддержки
 * @param support Численное значение поддержки
 * @return Является ли поддержка
 */
function isModerateSupport(support: number): boolean {
  return support >= 0 && support < 50
}

/**
 * Управление состоянием для персонажей
 */
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
    /** Возвращает актуальное количество персонажей с активной поддержкой */
    currentActiveSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isActiveSupport(val.currentSupport) ? ++acc : acc), 0),

    /** Возвращает актуальное количество персонажей с умеренной поддержкой */
    currentModerateSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isModerateSupport(val.currentSupport) ? ++acc : acc), 0),

    /** Возвращает начальное для периода количество персонажей с активной поддержкой */
    initialActiveSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isActiveSupport(val.initialSupport) ? ++acc : acc), 0),

    /** Возвращает начальное для периода количество персонажей с умеренной поддержкой */
    initialModerateSupport: (state: CharsState) =>
      state.chars.reduce((acc, val) => (isModerateSupport(val.initialSupport) ? ++acc : acc), 0),

    /** Динамика изменения количества персонажей с активной поддержкой в актуальном периоде */
    activeSupportChange(): number {
      return this.currentActiveSupport - this.initialActiveSupport
    },

    /** Динамика изменения количества персонажей с умеренной поддержкой в актуальном периоде */
    moderateSupportChange(): number {
      return this.currentModerateSupport - this.initialModerateSupport
    },
  },
})
