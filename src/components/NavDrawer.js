import React, { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import ShuffleIcon from "@mui/icons-material/Shuffle";

function NavDrawer() {
  const anchor = "right";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <>
        <IconButton size="large" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="13rem" textAlign="center">
            <Typography mt={2} mb={2} variant="h6">
              Genre
            </Typography>
            <Typography my={2} variant="h6">
              Types
            </Typography>
            <Typography my={2} variant="h6">
              Ongoing
            </Typography>
            <IconButton>
              <ShuffleIcon />
            </IconButton>
          </Box>
        </Drawer>
      </>
    </div>
  );
}

export default NavDrawer;
