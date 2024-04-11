export interface Match {
  id: number;
  matchType: number;
  betLenght: number;
  matchTime: string;
  teamNames: string;
  date: string;
  iskbet: boolean;
  live: boolean;
  matchRate: number;
  sportId: number;
  matchResult: number;
}
export interface Filters {
  date: any;
  iskbet: any;
  team: any;
  singleMatch: any;
}
export interface InitialState {
  couponMatches: Array<Match>;
  status?: string;
  sportData?: any;
  filteredData?: any;
  filters: Filters;
  selectedRates: {
    [key: string]: number;
  };
  isEmpty: boolean;
}
