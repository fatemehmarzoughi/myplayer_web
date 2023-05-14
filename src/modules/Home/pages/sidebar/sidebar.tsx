import React, { useMemo, useState } from "react";
import { MyFlatList } from "components";
import { useDrawer } from "hooks/useDrawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { TrackListItem, TrackListItemType } from "API";
import { motion as Motion, Reorder } from "framer-motion";

export const Sidebar: React.FC = React.memo(() => {
  const { openDrawer, closeDrawer, isOpen } = useDrawer({});

  const [items, setItems] = useState<TrackListItemType[]>(TrackListItem)

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            {item.title}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </SwipeableDrawer>
  );
});
