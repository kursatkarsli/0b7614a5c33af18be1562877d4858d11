import { Select, styled } from "@mui/material";

export const CustomRateSelect = styled(Select)(() => ({
  color: "#FFFFFF",
  "& .MuiSelect-icon": {
    color: "white",
  },
  border: "none",
  width: "100%",
  background: "#1D2225",
}));
