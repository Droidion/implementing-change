import { defineStore } from 'pinia'

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
