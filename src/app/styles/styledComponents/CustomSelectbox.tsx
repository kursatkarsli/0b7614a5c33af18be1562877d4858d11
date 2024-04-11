import { Select, styled } from "@mui/material";


export const CustomSelectbox = styled(Select)(() => ({
  color: "#FFFFFF",
  "& .MuiSelect-icon": {
    color: "white",
  },
  border: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#212629 !important",
  },
}));
