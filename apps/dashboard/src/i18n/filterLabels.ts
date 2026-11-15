import { TicketFilter } from '@luminatick/shared';

/**
 * System filters are seeded by the server migration with fixed IDs and English
 * names. Map those IDs to locale keys so the UI can show them in the active
 * language, while user-created filters keep whatever name the admin typed.
 */
const SYSTEM_FILTER_KEYS: Record<string, string> = {
  filter_system_open: 'filters.systemFilters.openTickets',
  filter_system_all: 'filters.systemFilters.allTickets',
};

/** The "All Tickets" system filter duplicates the built-in list entry. */
export const ALL_TICKETS_FILTER_ID = 'filter_system_all';

export function filterLabel(filter: TicketFilter, t: (key: string) => string): string {
  const key = SYSTEM_FILTER_KEYS[filter.id];
  return key ? t(key) : filter.name;
}
