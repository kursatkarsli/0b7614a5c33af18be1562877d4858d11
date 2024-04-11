"use client";

import { formatTimestamp } from "@/helpers";
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { handleFilter } from "lib/features/sportData/sportDataSlice";
import { useAppDispatch } from "lib/hooks";
import { CustomSelectbox } from "../styles/styledComponents";
import { DateSelectI } from "../types/components.types";

export default function DateSelector({ sportDates, filterInfo }: DateSelectI) {
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(
      dispatch(
        handleFilter({
          ...filterInfo,
          date: event.target.value,
        })
      )
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="dateSelectLabel"
        sx={{ color: "#FFFFFF", "&.Mui-focused": { color: "#FFFFFF" } }}
      >
        Tarih
      </InputLabel>
      <CustomSelectbox
        labelId="dateSelect"
        id="dateSelect"
        value={filterInfo.date}
        onChange={handleChange}
      >
        {sportDates
          ? Object.keys(sportDates).map((day: any) => (
              <MenuItem value={day}> {formatTimestamp(day)}</MenuItem>
            ))
          : null}
      </CustomSelectbox>
    </FormControl>
  );
}
