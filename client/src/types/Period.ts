import { EventId } from './Event'

interface NeedEvent {
  id: EventId
  minChars: number
}

export interface Period {
  period: number
  needSupporters: {
    moderate: number
    active: number
  }
  needEvents: NeedEvent[]
}
