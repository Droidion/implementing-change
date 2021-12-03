import { defineStore } from 'pinia'

/**
 * Управление состоянием для прогрессии игры
 */
export const useProgressStore = defineStore('progress', {
  state: () => {
    return {
      authenticated: false,
      currentPeriod: 1,
      currentDay: 1,
      maxDays: 400,
      teamNumber: 0,
    }
  },
})
