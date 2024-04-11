import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { StyledButton } from "../styles/styledComponents";
import { Grid } from "@mui/material";

function QuickPlayDialog({ open, handleClose }: any) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <Grid container justifyContent={"center"} alignItems={"center"} spacing={3} padding={4}>
          <Grid item xs={12}>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                variant="h5"
                component={"h5"}
                sx={{
                  color: "#008641",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Kuponunuz Başarıyla oluşturulmuştur
              </DialogContentText>
            </DialogContent>
          </Grid>
          <Grid item xs={8}>
            <DialogActions>
              <StyledButton
                fullWidth
                backgroundColor="#008641"
                fontColor="#FFFFFF"
                sx={{textTransform: 'none'}}
                disableRipple={true}
                onClick={handleClose}
              >
                Yeni Kupon Yap
              </StyledButton>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default QuickPlayDialog;
