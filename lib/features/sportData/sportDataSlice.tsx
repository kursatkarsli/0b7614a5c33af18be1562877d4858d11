import {
  createAsyncThunk,
  createSlice,
  current,
  Reducer,
} from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { InitialState, Match } from "./types/sportDataSlice.types";
import axiosInstance from "@/services/axiosInstance";
import { dataEditing } from "lib/features/sportData/reduxhelper";

const initialState: InitialState = {
  couponMatches: [],
  selectedRates: {},
  filteredData: [],
  sportData: [],
  filters: {
    date: "",
    iskbet: false,
    team: "",
    singleMatch: false,
  },
  isEmpty: false,
};
export const getSportsData = createAsyncThunk(
  "getSportsData",
  async (params: string | string[]) => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.fetchData(
        `${params}`
      );
      dataEditing(response.data);
      return {
        sportId: response.data.sportId,
        sportData: dataEditing(response.data),
      };
    } catch (error) {}
  }
);
export const sportDataSlice = createSlice({
  name: "sportData",
  initialState,

  reducers: {
    handleFilter: (state, action) => {
      const { date, iskbet, team, singleMatch } = action.payload;
      let filters: any = [];
      state.filters.date = date;
      state.filters.iskbet = iskbet;
      state.filters.team = team;
      state.filters.singleMatch = singleMatch;

      if (singleMatch === true) {
        filters.push({ key: "matchType", value: 1 });
      }
      if (date !== "") {
        filters.push({ key: "date", value: date });
      }
      if (iskbet === true) {
        filters.push({ key: "iskbet", value: iskbet });
      }
      if (team !== "") {
        filters.push({ key: "team", value: team });
      }
      if (singleMatch === false) {
        filters = filters.filter((filter: any) => filter.key !== "matchType");
      }
      if (iskbet === false) {
        filters = filters.filter((filter: any) => filter.key !== "iskbet");
      }
      if (team === "") {
        filters = filters.filter((filter: any) => filter.key !== "team");
      }
      if (date === "") {
        filters = filters.filter((filter: any) => filter.key !== "date");
      }

      const newFilteredData = state.sportData.filter((item: any) => {
        return filters.every((filter: any) => {
          if (filter.key === "team") {
            console.log("ITEM", current(item), filter);
            if (!filter.value || typeof filter.value === "string") {
              return item.teamNames
                .toLowerCase()
                .includes(filter.value.toLowerCase());
            }
            return false;
          }
          if (filter.key === "matchType") {
            return (
              filter.value === null ||
              (item[filter.key] === 1 && filter.value === 1)
            );
          }
          if (filter.key === "iskbet") {
            return filter.value === null || item[filter.key] === filter.value;
          }
          if (filter.key === "date") {
            const [datePart] = item.date.split("T");
            const [year, month, day] = datePart.split("-").map(Number);
            const matchDate = new Date(year, month - 1, day).getTime();
            return matchDate === Number(filter.value);
          }
        });
      });

      if (!newFilteredData.length) {
        state.isEmpty = true;
      }
      state.filteredData = newFilteredData;
    },
    handleMatchForCoupon: (state, action) => {
      const findMatch: any = state.couponMatches.find(
        (match: any) => match.id === action.payload.id
      );

      if (findMatch) {
        const findIndex = state.couponMatches.findIndex(
          (match: any) => match.id === findMatch.id
        );
        if (findMatch.matchResult === action.payload.matchResult) {
          state.couponMatches.splice(findIndex, 1);
        } else {
          state.couponMatches[findIndex].matchResult =
            action.payload.matchResult;
          state.couponMatches[findIndex].matchRate = action.payload.matchRate;
        }
      } else {
        state.couponMatches.push(action.payload);
      }
    },
    handleRemoveMatchFromCoupon: (state, action) => {
      const findMatch: any = state.couponMatches.find(
        (match: Match) => match.id === action.payload.id
      );
      const findIndex = state.couponMatches.findIndex(
        (match: Match) => match.id === findMatch.id
      );
      state.couponMatches.splice(findIndex, 1);
      delete state.selectedRates[action.payload.id];
    },
    handlePlayCoupon: (state) => {
      state.couponMatches = [];
      state.selectedRates = {};
    },
    handleSelectedRates: (state, action) => {
      state.selectedRates[action.payload.id] =
        state.selectedRates[action.payload.id] === action.payload.rate
          ? null
          : action.payload.rate;
    },

    handleRemoveAllFilters: (state) => {
      state.filteredData = [];
      state.filters = {
        date: "",
        iskbet: false,
        team: "",
        singleMatch: false,
      };
      state.isEmpty = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSportsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSportsData.fulfilled, (state: any, action: any) => {
        state.status = "idle";
        state.sportData = action.payload.sportData;
        state.sportId = action.payload.sportId;
      })
      .addCase(getSportsData.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const {
  handleMatchForCoupon,
  handleSelectedRates,
  handleRemoveMatchFromCoupon,
  handleRemoveAllFilters,
  handleFilter,
  handlePlayCoupon,
} = sportDataSlice.actions;
export default sportDataSlice.reducer as Reducer;
