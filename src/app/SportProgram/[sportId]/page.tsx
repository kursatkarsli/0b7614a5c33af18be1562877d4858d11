"use client";

import CouponCard from "@/app/components/CouponCard";
import FilterArea from "@/app/components/FilterArea";
import NestedList from "@/app/components/Table/Table";
import { groupData } from "@/helpers/groupData";
import { Grid } from "@mui/material";
import { getSportsData } from "lib/features/sportData/sportDataSlice";
import { useAppSelector, useAppDispatch } from "lib/hooks";
import { useParams } from "next/navigation";
import { NotFound } from "public/assets/notFound";
import { useEffect } from "react";



function SportProgram() {
  const selector = useAppSelector((select: any) => {
    return select.reducer.sportDataSlice;
  });
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSportsData(params.sportId));
  }, []);
  console.log("SELECTOR", selector);
  return (
    <Grid
      container
      // alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"nowrap"}
      gap={1.5}
      paddingTop={1}
    >
      <Grid item xs={8}>
        <Grid item xs={12}>
          <FilterArea />
        </Grid>
        <Grid item xs={12}>
          {selector?.filteredData?.length ? (
            groupData(selector?.filteredData) &&
            Object.keys(groupData(selector?.filteredData)).map((value: any) => (
              <NestedList
                sportData={groupData(selector?.filteredData)[value]}
                matchDay={value}
                sportId={selector?.sportId}
                key={value}
              />
            ))
          ) : selector.isEmpty ? (
            <NotFound />
          ) : (
            groupData(selector?.sportData) &&
            Object.keys(groupData(selector?.sportData)).map((value: any) => (
              <NestedList
                sportData={groupData(selector?.sportData)[value]}
                matchDay={value}
                sportId={selector?.sportId}
                key={value}
              />
            ))
          )
          }
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <CouponCard />{" "}
      </Grid>
    </Grid>
  );
}

export default SportProgram;
