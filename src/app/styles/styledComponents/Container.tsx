import { StyledContainerI } from "@/app/types/styledComponents.types";
import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(
  ({
    background,
    minHeight,
    paddingLeft,
    paddingRight,
    flexWrap
  }: StyledContainerI) => ({
    background: background || "#008641",
    minHeight: minHeight || "5rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: paddingLeft || "4rem !important",
    paddingRight: paddingRight || "4rem !important",
    justifyContent: "space-between",
    flexWrap: flexWrap || 'wrap'
  })
);
