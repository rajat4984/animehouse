import React from "react";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Grid } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import NavDrawer from "./NavDrawer";
import Media from "react-media";

function Navbar() {
  return (
    <>
      <Media
        queries={{
          small: "(min-width:0px) and (max-width: 799px)",
          large: "(min-width:800px)",
        }}
      >
        {(matches) => (
          <div>
            {matches.small && (
              <Box component="div">
                <Grid
                  container
                  alignItems="center"
                  className="navbar"
                  sx={{ p: "1rem" }}
                >
                  <Grid item xs={10}>
                    <Typography variant="h5">AnimeHouse</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Avatar>A</Avatar>
                  </Grid>
                  <Grid item xs={1}>
                    <NavDrawer />
                  </Grid>
                </Grid>
              </Box>
            )}
            {matches.large && (
              <Box component="div">
                <Grid
                  container
                  alignItems="center"
                  className="navbar"
                  sx={{ p: "1.5rem" }}
                >
                  <Grid item xs={7}>
                    <Typography variant="h5">AnimeHouse</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <a href="#">Genre</a>
                  </Grid>
                  <Grid item xs={1}>
                    <a href="#">Types</a>
                  </Grid>
                  <Grid item xs={1}>
                    <a href="#">Ongoing</a>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="delete">
                      <ShuffleIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    {" "}
                    <Avatar>A</Avatar>
                  </Grid>
                </Grid>
              </Box>
            )}
          </div>
        )}
      </Media>
    </>
  );
}

export default Navbar;
