import { EventType } from './EventType'

export interface Event {
  id: EventId
  name: string
  length: number
  cooldown: number
  type: EventType
  description: string
}

export interface EventInfluence {
  from: EventId
  to: EventId
  effect: number
}

export type EventId =
  // Общие
  | 'prAction'
  | 'roadShow'
  | 'informationAnalysis'
  | 'includeReserve'
  | 'externalConference'
  | 'memo'
  | 'changeIncentiveSystem'
  | 'researchInformalGroups'
  | 'executiveDecision'
  | 'projectConsulting'
  | 'corporateHolidays'
  | 'developingKpi'
  | 'niceLetter'
  | 'projectReport'
  | 'topManagementSession'
  | 'payingBonuses'
  | 'employeesInterview'
  | 'postingNews'
  | 'corporateArticle'
  | 'developingNewOrgStructure'
  | 'sendingNewsletter'
  | 'orderingBusinessProcesses'
  | 'creatingWebsite'
  | 'externalMediaArticle'
  // Индивидуальные
  | 'meetingColleagues'
  | 'topManagerInterview'
  | 'employeePrivateMeeting'
  | 'meetingTopManager'
  | 'privateEmail'
  | 'askingColleagueAdvise'
  | 'helpingColleagues'
  | 'pilotProject'
  | 'usingColleagueAsExport'
  // Групповые
  | 'brainStorm'
  | 'askingGuru'
  | 'externalProvidersSeminar'
  | 'learningEvent'
  | 'privateMeeting'
  | 'teamBuildingTraining'
  | 'privateParty'
