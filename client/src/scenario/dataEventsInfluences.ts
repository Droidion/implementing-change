import type { EventInfluence } from '@/types/Event'

/**
 * Список влияния одних событий на другие по периодам.
 */
export const dataEventsInfluences: EventInfluence[][] = [
  // Период 1
  [
    {
      from: 'event-general-8',
      to: 'event-general-3',
      effect: 0.3,
    },
    {
      from: 'event-general-17',
      to: 'event-general-3',
      effect: 0.3,
    },
    {
      from: 'event-individual-1',
      to: 'event-individual-3',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-individual-4',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-individual-5',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-individual-6',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-general-17',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-group-5',
      effect: 0.2,
    },
    {
      from: 'event-individual-1',
      to: 'event-group-7',
      effect: 0.2,
    },
  ],
  // Период 2
  [
    {
      from: 'event-individual-5',
      to: 'event-individual-3',
      effect: 0.2,
    },
    {
      from: 'event-individual-5',
      to: 'event-individual-4',
      effect: 0.2,
    },
    {
      from: 'event-individual-6',
      to: 'event-general-15',
      effect: 0.2,
    },
    {
      from: 'event-individual-9',
      to: 'event-general-15',
      effect: 0.2,
    },
    {
      from: 'event-group-5',
      to: 'event-general-18',
      effect: 0.2,
    },
    {
      from: 'event-group-5',
      to: 'event-general-19',
      effect: 0.2,
    },
    {
      from: 'event-group-6',
      to: 'event-group-7',
      effect: 0.8,
    },
  ],
  // Период 3
  [
    {
      from: 'event-individual-5',
      to: 'event-group-1',
      effect: 0.3,
    },
    {
      from: 'event-group-1',
      to: 'event-group-5',
      effect: 0.3,
    },
  ],
  // Период 4
  [
    {
      from: 'event-general-1',
      to: 'event-general-2',
      effect: 0.2,
    },
    {
      from: 'event-general-10',
      to: 'event-general-2',
      effect: 0.2,
    },
    {
      from: 'event-general-21',
      to: 'event-general-2',
      effect: 0.2,
    },
    {
      from: 'event-individual-4',
      to: 'event-general-9',
      effect: 0.5,
    },
    {
      from: 'event-individual-5',
      to: 'event-individual-3',
      effect: 0.2,
    },
    {
      from: 'event-individual-5',
      to: 'event-individual-4',
      effect: 0.2,
    },
    {
      from: 'event-individual-4',
      to: 'event-general-15',
      effect: 0.3,
    },
    {
      from: 'event-general-15',
      to: 'event-group-4',
      effect: 0.5,
    },
    {
      from: 'event-group-3',
      to: 'event-general-17',
      effect: 0.3,
    },
    {
      from: 'event-group-4',
      to: 'event-general-17',
      effect: 0.3,
    },
    {
      from: 'event-group-3',
      to: 'event-general-24',
      effect: 0.2,
    },
  ],
  // Период 5
  [
    {
      from: 'event-general-12',
      to: 'event-general-7',
      effect: 0.3,
    },
    {
      from: 'event-individual-4',
      to: 'event-general-9',
      effect: 0.3,
    },
    {
      from: 'event-general-22',
      to: 'event-general-7',
      effect: 0.3,
    },
    {
      from: 'event-individual-8',
      to: 'event-general-12',
      effect: 0.3,
    },
    {
      from: 'event-general-22',
      to: 'event-general-12',
      effect: 0.3,
    },
  ],
  // Период 6
  [
    {
      from: 'event-general-13',
      to: 'event-general-4',
      effect: 0.2,
    },
    {
      from: 'event-general-12',
      to: 'event-general-7',
      effect: 0.2,
    },
    {
      from: 'event-individual-5',
      to: 'event-individual-2',
      effect: 0.2,
    },
    {
      from: 'event-individual-5',
      to: 'event-individual-3',
      effect: 0.2,
    },
    {
      from: 'event-general-22',
      to: 'event-general-20',
      effect: 0.3,
    },
  ],
  // Период 7
  [
    {
      from: 'event-general-14',
      to: 'event-general-11',
      effect: 0.4,
    },
  ],
]
