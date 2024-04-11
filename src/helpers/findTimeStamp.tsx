import { current } from "@reduxjs/toolkit";

export const findTimeStamp = ({
  match,
  state,
  action,
}: {
  match: any;
  state: any;
  action: any;
}) => {
  const [datePart] = match.date.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const matchDate = new Date(year, month - 1, day).getTime();
  return state.filters.singleMatch && state.filters.iskbet
    ? matchDate === Number(action.payload) &&
        match.iskbet === state.filters.iskbet &&
        match.matchType === 1
    : current(state.filters).singleMatch
    ? matchDate === Number(action.payload) && match.matchType === 1
    : state.filters.iskbet
    ? matchDate === Number(action.payload) &&
      match.iskbet === state.filters.iskbet
    : matchDate === Number(action.payload);
};
