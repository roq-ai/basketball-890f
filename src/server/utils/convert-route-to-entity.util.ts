const mapping: Record<string, string> = {
  customers: 'customer',
  games: 'game',
  organizations: 'organization',
  players: 'player',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
