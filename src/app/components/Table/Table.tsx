import { useState } from "react";
import {
  StyledCellBox,
  StyledContainer,
  StyledTableCell,
  StyledTableRow,
  CustomTypography,
} from "@/app/styles/styledComponents";
import { NestedListI } from "@/app/types/components.types";
import { formatTimestamp } from "@/helpers";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid, Table, TableBody } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import {
  handleMatchForCoupon,
  handleSelectedRates,
} from "lib/features/sportData/sportDataSlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { KingIcon } from "public/assets/kingIcon";
import { LiveIcon } from "public/assets/liveIcon";

export default function NestedList({ sportData, matchDay }: NestedListI) {
  const [open, setOpen] = useState(true);
  const selector = useAppSelector((select: any) => {
    return select.reducer.sportDataSlice;
  });

  const dispatch = useAppDispatch();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleSelectRate = ({ id, rate }: any) => {
    dispatch(handleSelectedRates({ id: id, rate: rate }));
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledContainer
          background="#353F45"
          minHeight="2rem"
          paddingLeft="1rem"
          paddingRight="0 !important"
        >
          <Grid item xs={12} onClick={handleClick}>
            <Grid container justifyContent={"space-between"} flexWrap="nowrap">
              <Grid item xs={10.4}>
                <CustomTypography
                  variant="h6"
                  color={"#FFFFFF"}
                  borderRight={"2px solid #414E55"}
                >
                  {formatTimestamp(matchDay)}
                </CustomTypography>
              </Grid>
              <Grid item xs={1.8}>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"nowrap"}
                >
                  <Grid item xs={4} borderRight={"2px solid #414E55"}>
                    <CustomTypography
                      variant="h6"
                      color={"#FFFFFF"}
                      textAlign={"center"}
                      sx={{ minWidth: "1.7%" }}
                    >
                      1
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={4} borderRight={"2px solid #414E55"}>
                    <CustomTypography
                      variant="h6"
                      color={"#FFFFFF"}
                      textAlign={"center"}
                      sx={{ minWidth: "1.7%" }}
                    >
                      0
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={4} borderRight={"2px solid #414E55"}>
                    <CustomTypography
                      variant="h6"
                      color={"#FFFFFF"}
                      textAlign={"center"}
                      sx={{ minWidth: "1.7%" }}
                    >
                      2
                    </CustomTypography>
                  </Grid>
                  <Grid
                    item
                    xs={3.3}
                    sx={{ minWidth: "2%" }}
                    borderRight={"2px solid #414E55"}
                    textAlign={"center"}
                  >
                    {" "}
                    {open ? (
                      <ExpandLess sx={{ color: "#FFFFFF" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#FFFFFF" }} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledContainer>
      </Grid>
      {open ? (
        <Grid item xs={12}>
          <StyledContainer
            background="transparent"
            minHeight="2rem"
            paddingLeft="0rem !important"
            paddingRight="0 !important"
          >
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              sx={{ width: "100%" }}
            >
              <Table aria-label="customized table">
                <TableBody>
                  {sportData?.map((row: any) => (
                    <StyledTableRow key={row?.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ width: "1.5%" }}
                      >
                        <Grid
                          container
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <StyledCellBox
                            boxColor={
                              row?.matchType === 2
                                ? "#A9D023"
                                : row?.matchType === 1
                                ? "#FF4242"
                                : "#1C6A9F"
                            }
                          >
                            {row.matchType}
                          </StyledCellBox>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ width: "1.7%" }}>
                        {row?.matchTime}
                      </StyledTableCell>
                      <StyledTableCell align="left" sx={{ width: "63%" }}>
                        <Grid
                          container
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Grid item xs={11}>
                            {row?.teamNames}
                          </Grid>
                          <Grid item>
                            <Grid container gap={0.5}>
                              <Grid item>{row?.iskbet && <KingIcon />}</Grid>
                              <Grid item>{row?.live && <LiveIcon />}</Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          width: "3%",
                          cursor: "pointer",
                          background:
                            selector?.selectedRates[row.id] !== null &&
                            selector?.selectedRates[row.id] === 1
                              ? "#F3E300"
                              : "transparent",
                        }}
                        onClick={() => {
                          if (row?.matchRate?.o[0]?.odd) {
                            handleSelectRate({ id: row.id, rate: 1 });

                            dispatch(
                              handleMatchForCoupon({
                                ...row,
                                sportId: selector.sportId,
                                matchResult: 1,
                                matchRate: row?.matchRate?.o[0]?.odd,
                              })
                            );
                          }
                        }}
                      >
                        {row?.matchRate?.o[0]?.odd
                          ? row?.matchRate?.o[0]?.odd.toLocaleString("en", {
                              minimumFractionDigits: 2,
                            })
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          width: "3%",
                          cursor: "pointer",
                          background:
                            selector?.selectedRates[row.id] !== null &&
                            selector?.selectedRates[row.id] === 0
                              ? "#F3E300"
                              : "transparent",
                        }}
                        onClick={() => {
                          if (row?.matchRate?.o[1]?.odd) {
                            handleSelectRate({ id: row.id, rate: 0 });
                            dispatch(
                              handleMatchForCoupon({
                                ...row,
                                sportId: selector.sportId,
                                matchResult: 0,
                                matchRate: row?.matchRate?.o[1]?.odd,
                              })
                            );
                          }
                        }}
                      >
                        {row?.matchRate?.o[1]?.odd
                          ? row?.matchRate?.o[1]?.odd.toLocaleString("en", {
                              minimumFractionDigits: 2,
                            })
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        onClick={() => {
                          if (row?.matchRate?.o[2]?.odd) {
                            handleSelectRate({ id: row.id, rate: 2 });

                            dispatch(
                              handleMatchForCoupon({
                                ...row,
                                sportId: selector.sportId,
                                matchResult: 2,
                                matchRate: row?.matchRate?.o[2]?.odd,
                              })
                            );
                          }
                        }}
                        sx={{
                          width: "3%",
                          cursor: "pointer",
                          background:
                            selector?.selectedRates[row.id] !== null &&
                            selector?.selectedRates[row.id] === 2
                              ? "#F3E300"
                              : "transparent",
                        }}
                      >
                        {row?.matchRate?.o[2]?.odd
                          ? row?.matchRate?.o[2]?.odd.toLocaleString("en", {
                              minimumFractionDigits: 2,
                            })
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          width: "2%",
                          minWidth: "2%",
                          background: [1, 0, 2].includes(
                            selector?.selectedRates[row.id]
                          )
                            ? "#F3E300"
                            : "#2F373C",
                          color: [1, 0, 2].includes(
                            selector?.selectedRates[row.id]
                          )
                            ? "#282F33"
                            : "#FFFFFF",
                          cursor: "pointer",
                        }}
                      >
                        +{row?.betLenght}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Collapse>
          </StyledContainer>
        </Grid>
      ) : null}
    </Grid>
  );
}
