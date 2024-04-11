"use client";
import { Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { BasketballIcon } from "public/assets/basketball";
import { SoccerIcon } from "public/assets/soccer";
import { TennisIcon } from "public/assets/tennis";
import { StyledContainer } from "../styles/styledComponents";
import { NavLink } from "./LinkButton";

function Tabbar() {
  const params = useParams();
  return (
    <StyledContainer background="#192125" maxWidth="xl" minHeight="3rem">
      <Grid item xs={6}>
        <Grid container gap={1}>
          <Grid
            item
            sx={{
              backgroundColor:
                params.sportId === "1" ? "#384750" : "transparent",
            }}
          >
            <NavLink href="/SportProgram/1" ariaLabel="Soccer Icon">
              <SoccerIcon />
              <Typography
                component="span"
                color="white"
                sx={{
                  marginLeft: ".5rem",
                }}
              >
                Futbol
              </Typography>
            </NavLink>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor:
                params.sportId === "2" ? "#384750" : "transparent",
            }}
          >
            <NavLink href="/SportProgram/2" ariaLabel="Soccer Icon">
              <BasketballIcon />
              <Typography
                component="span"
                color="white"
                sx={{ marginLeft: ".5rem" }}
              >
                Basketball
              </Typography>
            </NavLink>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor:
                params.sportId === "5" ? "#384750" : "transparent",
            }}
          >
            <NavLink href="/SportProgram/5" ariaLabel="Soccer Icon">
              <TennisIcon />
              <Typography
                component="span"
                color="white"
                sx={{ marginLeft: ".5rem" }}
              >
                Tenis
              </Typography>
            </NavLink>
          </Grid>
        </Grid>{" "}
      </Grid>
      <Grid item xs={2}>
        <Grid container alignItems={"center"} direction={"column"}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="white">
              14 Aralık 2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="white">
              09:56
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
export default Tabbar;
