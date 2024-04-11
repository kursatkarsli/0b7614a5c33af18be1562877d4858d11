import { IconButton } from "@mui/material";
import { handleRemoveAllFilters } from "lib/features/sportData/sportDataSlice";
import { useAppDispatch } from "lib/hooks";
import NextLink from "next/link";
import { LinkButtonI } from "../types/components.types";

export const NavLink = ({ href, children, ariaLabel }: LinkButtonI) => {
  const dispatch = useAppDispatch();
  const handleRemoveFilterOnNavigation = () => {
    dispatch(handleRemoveAllFilters());
  };
  return (
    <NextLink href={href} passHref>
      <IconButton
        onClick={handleRemoveFilterOnNavigation}
        aria-label={ariaLabel}
      >
        {children}
      </IconButton>
    </NextLink>
  );
};
