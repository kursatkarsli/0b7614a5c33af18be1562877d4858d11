export interface LinkButtonI {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}
export interface DateSelectI {
  sportDates: any;
  filterInfo: any;
}
export interface NestedListI {
  sportData?: any;
  matchDay: number;
  sportId: number;
}
export interface OutlinedInputI {
  handleChange: (event: any) => void;
  value: string;
}
export enum SportEnums{
  FOOTBALL = "1",
  BASKETBALL = "2",
  TENNIS = "5",
}