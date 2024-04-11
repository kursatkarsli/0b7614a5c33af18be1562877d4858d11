import { StyledTypographyI } from "@/app/types/styledComponents.types";
import { styled, Typography } from "@mui/material";

export const CustomTypography = styled(Typography)(
  ({ fontSize, color }: StyledTypographyI) => ({
    fontSize: fontSize || "1rem",
    color: color || "#FFFFFF",
  })
);
