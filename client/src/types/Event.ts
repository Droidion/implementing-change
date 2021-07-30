import { EventType } from './EventType'

export interface Event {
  id: string
  name: string
  length: number
  cooldown: number
  type: EventType
  description: string
}

export enum EventId {
  PrAction = 'prAction',
  RoadShow = 'roadShow',
  InformationAnalysis = 'informationAnalysis',
  IncludeReserve = 'includeReserve',
  ExternalConference = 'externalConference',
  Memo = 'memo',
  ChangeIncentiveSystem = 'changeIncentiveSystem',
  ResearchInformalGroups = 'researchInformalGroups',
  ExecutiveDecision = 'executiveDecision',
  ProjectConsulting = 'projectConsulting',
  CorporateHolidays = 'corporateHolidays',
  DevelopingKpi = 'developingKpi',
  NiceLetter = 'niceLetter',
  ProjectReport = 'projectReport',
  TopManagementSession = 'topManagementSession',
  PayingBonuses = 'payingBonuses',
  EmployeesInterview = 'employeesInterview',
  PostingNews = 'postingNews',
  CorporateArticle = 'corporateArticle',
  DevelopingNewOrgStructure = 'developingNewOrgStructure',
  SendingNewsletter = 'sendingNewsletter',
  OrderingBusinessProcesses = 'orderingBusinessProcesses',
  CreatingWebsite = 'creatingWebsite',
  ExternalMediaArticle = 'externalMediaArticle',
  MeetingColleagues = 'meetingColleagues',
  TopManagerInterview = 'topManagerInterview',
  EmployeePrivateMeeting = 'employeePrivateMeeting',
  MeetingTopManager = 'meetingTopManager',
  PrivateEmail = 'privateEmail',
  AskingColleagueAdvise = 'askingColleagueAdvise',
  HelpingColleagues = 'helpingColleagues',
  PilotProject = 'pilotProject',
  UsingColleagueAsExport = 'usingColleagueAsExport',
  BrainStorm = 'brainStorm',
  AskingGuru = 'askingGuru',
  ExternalProvidersSeminar = 'externalProvidersSeminar',
  LearningEvent = 'learningEvent',
  PrivateMeeting = 'privateMeeting',
  TeamBuildingTraining = 'teamBuildingTraining',
  PrivateParty = 'privateParty',
}
