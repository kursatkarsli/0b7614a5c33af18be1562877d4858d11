import { StyledButtonI } from "@/app/types/styledComponents.types";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(
  ({
    backgroundColor,
    paddingInline,
    fontColor,
  }: StyledButtonI) => ({
    paddingInline: paddingInline || "1.5rem",
    backgroundColor: backgroundColor || "#FFFFFF",
    color: fontColor || "black",
    ":hover": { backgroundColor: backgroundColor || "#FFFFFF" },
  })
);
