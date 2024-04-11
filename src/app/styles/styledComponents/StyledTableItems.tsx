import {
  Box,
  styled,
  TableCell,
  TableRow,
} from "@mui/material";

export const StyledTableCell = styled(TableCell)(() => ({
  borderRight: "1px solid gray",
  padding: ".5rem .1rem",
}));
export const StyledCellBox = styled(Box)(
  ({ boxColor }: { boxColor?: string }) => ({
    backgroundColor: boxColor || "transparent",
    width: "1.6rem",
    height: "1.6rem",
    borderRadius: "5px",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "& td:last-child": {
    borderRight: 0,
  },
}));
