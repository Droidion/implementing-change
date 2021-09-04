import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', {
  state: () => {
    return {
      currentPeriod: 1,
      currentDay: 1,
      maxDays: 400,
    }
  },
})
