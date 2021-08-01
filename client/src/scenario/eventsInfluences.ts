import type { EventInfluence } from '../types/Event'

/**
 * Список влияния одних событий на другие по периодам.
 */
export const eventsInfluences: EventInfluence[][] = [
  // Период 1
  [
    {
      from: 'researchInformalGroups',
      to: 'informationAnalysis',
      effect: 0.3,
    },
    {
      from: 'employeesInterview',
      to: 'informationAnalysis',
      effect: 0.3,
    },
    {
      from: 'meetingColleagues',
      to: 'employeePrivateMeeting',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'meetingTopManager',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'privateEmail',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'askingColleagueAdvise',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'employeesInterview',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'privateMeeting',
      effect: 0.2,
    },
    {
      from: 'meetingColleagues',
      to: 'privateParty',
      effect: 0.2,
    },
  ],
  // Период 2
  [
    {
      from: 'privateEmail',
      to: 'employeePrivateMeeting',
      effect: 0.2,
    },
    {
      from: 'privateEmail',
      to: 'meetingTopManager',
      effect: 0.2,
    },
    {
      from: 'askingColleagueAdvise',
      to: 'topManagementSession',
      effect: 0.2,
    },
    {
      from: 'usingColleagueAsExport',
      to: 'topManagementSession',
      effect: 0.2,
    },
    {
      from: 'privateMeeting',
      to: 'postingNews',
      effect: 0.2,
    },
    {
      from: 'privateMeeting',
      to: 'corporateArticle',
      effect: 0.2,
    },
    {
      from: 'teamBuildingTraining',
      to: 'privateParty',
      effect: 0.8,
    },
  ],
  // Период 3
  [
    {
      from: 'privateEmail',
      to: 'brainStorm',
      effect: 0.3,
    },
    {
      from: 'brainStorm',
      to: 'privateMeeting',
      effect: 0.3,
    },
  ],
  // Период 4
  [
    {
      from: 'prAction',
      to: 'roadShow',
      effect: 0.2,
    },
    {
      from: 'projectConsulting',
      to: 'roadShow',
      effect: 0.2,
    },
    {
      from: 'sendingNewsletter',
      to: 'roadShow',
      effect: 0.2,
    },
    {
      from: 'meetingTopManager',
      to: 'executiveDecision',
      effect: 0.5,
    },
    {
      from: 'privateEmail',
      to: 'employeePrivateMeeting',
      effect: 0.2,
    },
    {
      from: 'privateEmail',
      to: 'meetingTopManager',
      effect: 0.2,
    },
    {
      from: 'meetingTopManager',
      to: 'topManagementSession',
      effect: 0.3,
    },
    {
      from: 'topManagementSession',
      to: 'learningEvent',
      effect: 0.5,
    },
    {
      from: 'externalProvidersSeminar',
      to: 'employeesInterview',
      effect: 0.3,
    },
    {
      from: 'learningEvent',
      to: 'employeesInterview',
      effect: 0.3,
    },
    {
      from: 'externalProvidersSeminar',
      to: 'externalMediaArticle',
      effect: 0.2,
    },
  ],
  // Период 5
  [
    {
      from: 'developingKpi',
      to: 'changeIncentiveSystem',
      effect: 0.3,
    },
    {
      from: 'meetingTopManager',
      to: 'executiveDecision',
      effect: 0.3,
    },
    {
      from: 'orderingBusinessProcesses',
      to: 'changeIncentiveSystem',
      effect: 0.3,
    },
    {
      from: 'pilotProject',
      to: 'developingKpi',
      effect: 0.3,
    },
    {
      from: 'orderingBusinessProcesses',
      to: 'developingKpi',
      effect: 0.3,
    },
  ],
  // Период 6
  [
    {
      from: 'niceLetter',
      to: 'includeReserve',
      effect: 0.2,
    },
    {
      from: 'developingKpi',
      to: 'changeIncentiveSystem',
      effect: 0.2,
    },
    {
      from: 'privateEmail',
      to: 'topManagerInterview',
      effect: 0.2,
    },
    {
      from: 'privateEmail',
      to: 'employeePrivateMeeting',
      effect: 0.2,
    },
    {
      from: 'orderingBusinessProcesses',
      to: 'developingNewOrgStructure',
      effect: 0.3,
    },
  ],
  // Период 7
  [
    {
      from: 'projectReport',
      to: 'corporateHolidays',
      effect: 0.4,
    },
  ],
]
