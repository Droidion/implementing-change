import { CharId } from './Character'
import { EventId } from './Event'

export interface RejectChance {
  // Шанс что будет отказ (от 0 до 1)
  chance: number
  // Реплика персонажа об отказе
  reply: string
}

export type RejectChancesCollection = Partial<Record<EventId, Record<CharId, RejectChance>>>[]
