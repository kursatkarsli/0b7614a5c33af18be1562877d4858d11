import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Header from "./components/Header";

import "./styles/css/globals.css";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Navbar />
            </Grid>
            <Grid item xs={12}>
              <main>{children}</main>
            </Grid>
          </Grid>
        </StoreProvider>
      </body>
    </html>
  );
}
