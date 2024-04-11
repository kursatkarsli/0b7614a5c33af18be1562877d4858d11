import { countCouponPrice } from "@/helpers/countCoupon";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Grid,
  Collapse,
  Card,
  CardContent,
  IconButton,
  Divider,
  CardActions,
  MenuItem,
} from "@mui/material";
import { handlePlayCoupon, handleRemoveMatchFromCoupon } from "lib/features/sportData/sportDataSlice";
import { useAppSelector, useAppDispatch } from "lib/hooks";
import { BasketballIcon } from "public/assets/basketball";
import { EmptyCouponMessage } from "public/assets/emptyCoupont";
import { KingIcon } from "public/assets/kingIcon";
import { LiveIcon } from "public/assets/liveIcon";
import { SoccerIcon } from "public/assets/soccer";
import { TennisIcon } from "public/assets/tennis";
import { TrashIcon } from "public/assets/trashIcon";
import { useState } from "react";
import {
  StyledContainer,
  StyledButton,
  StyledCellBox,
  CustomRateSelect,
} from "../styles/styledComponents";
import { CustomTypography } from "../styles/styledComponents/CustomTypography";
import { formatTimestamp, generateRates } from "@/helpers";
import QuickPlayDialog from "./QuickPlayDialog";
export default function CouponCard() {
  const [openCoupon, setOpenCoupon] = useState(true);
  const [selectCouponRate, setSelectCouponRate] = useState(20);
  const [open, setOpen] = useState(false);

  const selector = useAppSelector((select: any) => {
    return select.reducer.sportDataSlice;
  });
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setOpenCoupon(!openCoupon);
  };
  const handleCouponRate = (event: any) => {
    setSelectCouponRate(event.target.value);
  };
  const handleRemove = (match: any) => {
    dispatch(handleRemoveMatchFromCoupon(match));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(handlePlayCoupon())
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledContainer
          background="#353F45"
          minHeight="2rem"
          paddingLeft="1rem"
          paddingRight="0 !important"
          sx={{ paddingBlock: ".5rem" }}
        >
          <Grid item xs={12} onClick={handleClick}>
            <Grid container justifyContent={"space-between"} flexWrap="nowrap">
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <CustomTypography
                      mb={"-.5rem"}
                      variant="h6"
                      color={"#FFFFFF"}
                    >
                      Kuponum
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTypography
                      fontSize={"0.85rem"}
                      variant="caption"
                      color={"#99A6AB"}
                    >
                      T.Oran{" "}
                      {countCouponPrice(selector.couponMatches).toFixed(2)}
                    </CustomTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} sx={{ minWidth: "2%" }} textAlign={"center"}>
                <Grid
                  container
                  gap={3}
                  flexWrap={"nowrap"}
                  alignItems={"center"}
                  justifyContent={"end"}
                  paddingRight={"1rem"}
                >
                  <Grid item xs={6}>
                    {" "}
                    {selector?.couponMatches.length ? (
                      <StyledButton
                        backgroundColor="#F7E102"
                        paddingInline="0.2rem"
                      >
                        {selector?.couponMatches.length} Maç
                      </StyledButton>
                    ) : null}
                  </Grid>
                  <Grid item xs={2}>
                    {openCoupon ? (
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
      <Grid item xs={12}>
        <Collapse
          in={openCoupon}
          timeout="auto"
          unmountOnExit
          sx={{ width: "100%" }}
        >
          {" "}
          {selector?.couponMatches.length ? (
            <Card>
              {selector?.couponMatches.map((matches: any) => (
                <CardContent sx={{ padding: "0 1rem" }}>
                  <Grid container mb={".3rem"}>
                    <Grid item xs={12}>
                      <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Grid item xs={9}>
                          <Grid
                            container
                            gap={1.5}
                            alignItems={"center"}
                            flexWrap={"nowrap"}
                          >
                            <Grid item xs={1}>
                              <IconButton>
                                {matches.sportId === 1 ? (
                                  <SoccerIcon />
                                ) : matches.sportId === 2 ? (
                                  <BasketballIcon />
                                ) : (
                                  <TennisIcon />
                                )}
                              </IconButton>
                            </Grid>
                            <Grid item xs={10}>
                              <CustomTypography
                                fontSize={"0.85rem"}
                                variant="caption"
                                color={"#282F33"}
                              >
                                {matches?.teamNames}
                              </CustomTypography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={() => handleRemove(matches)}>
                            <TrashIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} pl={"2rem"}>
                      <CustomTypography
                        fontSize={"0.85rem"}
                        variant="caption"
                        color={"#99A6AB"}
                      >
                        {formatTimestamp(new Date(matches?.date).getTime())}{" "}
                        {matches?.matchTime}
                      </CustomTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        gap={0.6}
                        justifyContent={"space-between"}
                      >
                        <Grid item xs={6}>
                          <Grid
                            container
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexWrap={"nowrap"}
                            gap={1}
                          >
                            <Grid item>
                              <StyledCellBox
                                boxColor={
                                  matches?.matchType === 2
                                    ? "#A9D023"
                                    : matches?.matchType === 1
                                    ? "#FF4242"
                                    : "#1C6A9F"
                                }
                              >
                                {matches.matchType}
                              </StyledCellBox>
                            </Grid>
                            <Grid item xs={11}>
                              <CustomTypography
                                fontSize={"0.85rem"}
                                variant="caption"
                                color={"black"}
                              >
                                Maç Sonucu: {matches?.matchResult}
                              </CustomTypography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={3}>
                          <Grid container alignItems={"center"} gap={1}>
                            <Grid item>
                              <CustomTypography variant="h6" color={"black"}>
                                {matches?.matchRate}
                              </CustomTypography>
                            </Grid>
                            <Grid item> {matches?.iskbet && <KingIcon />}</Grid>
                            <Grid item> {matches?.live && <LiveIcon />}</Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </CardContent>
              ))}
              <CardActions sx={{ padding: 0 }}>
                <StyledContainer
                  background="#353F45"
                  minHeight="2rem"
                  paddingLeft="1rem"
                  paddingRight="1rem "
                  sx={{ paddingBlock: ".5rem", gap: ".5rem" }}
                >
                  <Grid item xs={12}>
                    <CustomTypography fontSize={"0.85rem"} variant="caption">
                      Misli
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomRateSelect
                      labelId="couponRateSelector"
                      id="couponRateSelector"
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,
                          },
                        },
                      }}
                      value={selectCouponRate}
                      onChange={handleCouponRate}
                      size="small"
                    >
                      {generateRates().map((rate: any) => (
                        <MenuItem value={rate}>{rate}</MenuItem>
                      ))}
                    </CustomRateSelect>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid xs={4}>
                        <CustomTypography variant="h6" color={"#FFFFFF"}>
                          Kupon Bedeli
                        </CustomTypography>
                      </Grid>
                      <Grid xs={2}>
                        <CustomTypography
                          variant="h6"
                          color={"#FFFFFF"}
                          textAlign={"end"}
                        >
                          {selectCouponRate} TL
                        </CustomTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid xs={4}>
                        <CustomTypography variant="h6" color={"#FFFFFF"}>
                          Toplam Oran{" "}
                        </CustomTypography>
                      </Grid>
                      <Grid xs={2}>
                        <CustomTypography
                          variant="h6"
                          color={"#FFFFFF"}
                          textAlign={"end"}
                        >
                          {countCouponPrice(selector.couponMatches).toFixed(2)}
                        </CustomTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid xs={6}>
                        <CustomTypography variant="h6" color={"#FFFFFF"}>
                          Maksimum Kazanç{" "}
                        </CustomTypography>
                      </Grid>
                      <Grid xs={3}>
                        <CustomTypography
                          variant="h6"
                          color={"#FFFFFF"}
                          textAlign={"end"}
                        >
                          {(
                            countCouponPrice(selector.couponMatches).toFixed(
                              2
                            ) * selectCouponRate
                          ).toFixed(2)}{" "}
                          TL
                        </CustomTypography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledButton
                        fullWidth
                        backgroundColor="#008641"
                        fontColor="#FFFFFF"
                        disableRipple={true}
                        onClick={handleClickOpen}
                      >
                        Hemen Oyna
                      </StyledButton>
                      <QuickPlayDialog
                        handleClose={handleClose}
                        open={open}
                      />
                    </Grid>
                  </Grid>{" "}
                </StyledContainer>
              </CardActions>
            </Card>
          ) : (
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              padding={"3rem"}
              sx={{ backgroundColor: "#f8f8f8" }}
            >
              <EmptyCouponMessage />
            </Grid>
          )}
        </Collapse>
      </Grid>
    </Grid>
  );
}
