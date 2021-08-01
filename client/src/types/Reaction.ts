import { EventId } from './Event'
import { CharId } from './Character'

export type Reaction = Record<CharId, Record<EventId, number>>
