import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { SearchIcon } from "public/assets/search";
import { CustomInput } from "../styles/styledComponents";
import { OutlinedInputI } from "../types/components.types";

export const CustomOutlinedInput = ({
  handleChange,
  value,
}: OutlinedInputI) => {
  return (
    <CustomInput
      id="outlined-adornment-weight"
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      placeholder="Bir Takım Adı giriniz"
      onInput={handleChange}
      value={value}
      size="small"
    />
  );
};
