import { EventType } from './EventType'

export interface Event {
  id: string
  name: string
  length: number
  cooldown: number
  type: EventType
  description: string
}
