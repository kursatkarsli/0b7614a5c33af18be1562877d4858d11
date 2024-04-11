"use client";

import Image from "next/image";
import { AppBar, Grid } from "@mui/material";
import { StyledContainer, StyledButton } from "../styles/styledComponents";

function Header() {
  return (
    <AppBar position="relative">
      <StyledContainer maxWidth="xl">
        <Grid item xs={2}>
          <Image src="/assets/logo.svg" alt="logo" width={108} height={51} />
        </Grid>
        <Grid item xs={4}>
          <Grid container gap={2} justifyContent={'flex-end'}>
            <Grid item>
              <StyledButton backgroundColor="#F3E300" variant="contained">
                Giriş
              </StyledButton>
            </Grid>
            <Grid item>
              <StyledButton variant="contained">Üye Ol</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </StyledContainer>
    </AppBar>
  );
}
export default Header;
