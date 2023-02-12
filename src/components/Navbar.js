import React from "react";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Grid } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navbar() {
  return (
    <Box component="div">
      <Grid container alignItems="center" className="navbar" sx={{ p: "1rem" }}>
        <Grid item xs={8}>
          <Typography variant="h5">AnimeHouse</Typography>
        </Grid>
        <Grid container xs={4} alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            Genre
          </Grid>
          <Grid item xs={2}>
            Types
          </Grid>
          <Grid item xs={2}>
            Ongoing
          </Grid>
          <Grid item xs={2}>
            <ShuffleIcon />
          </Grid>
          <Grid item xs={2}>
            {" "}
            <Avatar>A</Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navbar;
