import { OutlinedInput, styled } from "@mui/material";

export const CustomInput = styled(OutlinedInput)(() => ({
  color: "white",
  "& ::placeholder": {
    color: "rgba(255, 255, 255, 0.2)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#212629",
  },
}));
