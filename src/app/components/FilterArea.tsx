"use client";

import { groupData } from "@/helpers/groupData";
import { Grid, IconButton } from "@mui/material";
import { handleRemoveAllFilters, handleFilter } from "lib/features/sportData/sportDataSlice";
import { useAppSelector, useAppDispatch } from "lib/hooks";
import { DeleteIcon } from "public/assets/deleteIcon";
import { SingleMatchIcon } from "public/assets/singleMatchIcon";
import { UnionIcon } from "public/assets/union";
import { StyledContainer } from "../styles/styledComponents";
import { CustomTypography } from "../styles/styledComponents/CustomTypography";
import DateSelect from "./DateSelect";
import { CustomOutlinedInput } from "./OutlinedInput";



function FilterArea() {
  const selector = useAppSelector((select: any) => {
    return select.reducer.sportDataSlice;
  });
  const dispatch = useAppDispatch();
  const handleRemoveFilter = () => {
    dispatch(handleRemoveAllFilters());
  };
  const handleFilterIskbet = () => {
    dispatch(
      handleFilter({
        iskbet: !selector?.filters?.iskbet,
        singleMatch: selector?.filters?.singleMatch,
        team: selector?.filters?.team,
        date: selector?.filters?.date,
      })
    );
  };
  const handleSingleMatch = () => {
    dispatch(
      handleFilter({
        iskbet: selector?.filters?.iskbet,
        singleMatch: !selector?.filters?.singleMatch,
        team: selector?.filters?.team,
        date: selector?.filters?.date,
      })
    );
  };
  const handleTeamNameInput = (event: any) => {
    console.log(event?.target.value);
    dispatch(
      handleFilter({
        iskbet: selector?.filters?.iskbet,
        singleMatch: selector?.filters?.singleMatch,
        team: event.target.value,
        date: selector?.filters?.date,
      })
    );
  };
  console.log('SELECTOR', selector.filteredData)
  return (
    <StyledContainer
      background="#282F33"
      minHeight="1rem"
      paddingLeft="1rem"
      paddingRight="1rem"
      sx={{ alignItems: "center" }}
      flexWrap="nowrap"
    >
      <Grid item xs={10.6} sx={{ borderRight: "2px solid #313A3F" }}>
        <Grid container gap={1.5} alignItems={"center"} flexWrap={"nowrap"}>
          <Grid item>
            <CustomOutlinedInput
              handleChange={handleTeamNameInput}
              value={selector?.filters?.team}
            />
          </Grid>
          <Grid item>
            <DateSelect
              sportDates={groupData(selector?.sportData)}
              filterInfo={selector?.filters}
            />
          </Grid>
          <Grid item>
            <IconButton onClick={handleFilterIskbet}>
              <UnionIcon isIskbet={selector?.filters?.iskbet} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleSingleMatch}>
              <SingleMatchIcon isSingleMatch={selector?.filters?.singleMatch} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleRemoveFilter}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1.4} marginRight={".5rem"}>
        <Grid
          container
          minHeight={52}
          alignItems={"center"}
          justifyContent={"center"}
          borderRight={"2px solid #313A3F"}
        >
          <CustomTypography variant="h6">Maç Sonucu</CustomTypography>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default FilterArea;
