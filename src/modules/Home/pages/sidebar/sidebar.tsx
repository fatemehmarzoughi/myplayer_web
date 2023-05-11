import React from "react";
import { useDrawer } from "hooks/useDrawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const Sidebar: React.FC = React.memo(() => {
  const { openDrawer, closeDrawer, isOpen } = useDrawer({});

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <ul>
        <li>saba</li>
      </ul>
    </SwipeableDrawer>
  );
});
