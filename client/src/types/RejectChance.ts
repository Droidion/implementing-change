export interface RejectChance {
  // Шанс что будет отказ (от 0 до 1)
  chance: number
  // Реплика персонажа об отказе
  reply: string
}

export type RejectChancesCollection = Record<string, Record<string, RejectChance>>[]
