import clsx from "clsx";
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { IoIosRepeat } from "react-icons/io";
import { IoShuffleSharp } from "react-icons/io5";
import { MyFontIcon, MyTrack } from "components";
import { Drawer, Typography } from "@mui/material";
import { useDrawer, useTimeCalculator } from "hooks";
import { TrackListItem, TrackListItemType } from "API";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "./styles/track-list.scss";

export const TrackList: React.FC = React.memo(() => {
  const { timeCalculator } = useTimeCalculator({ isDoubleDigit: false });
  const { toggleDrawer, isOpen } = useDrawer({});

  const [items, setItems] = useState<TrackListItemType[]>(TrackListItem);

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      variant="persistent"
      classes={{
        paper: "track-list",
      }}
    >
      <div className={clsx(isOpen && "track-list__header")}>
        <MyFontIcon
          circle
          variant="filled"
          onClick={toggleDrawer}
          classes={{
            root: clsx(
              "track-list__chevron",
              isOpen && "track-list__chevron--open"
            ),
          }}
          tooltipProps={{
            title: "Track list",
            placement: "left"
          }}
        >
          {isOpen ? <BiChevronRight /> : <BiChevronLeft />}
        </MyFontIcon>

      <Typography variant="h5" color="black" fontWeight={700}>
        Track list
      </Typography>

      </div>
      <div className="track-list__play-options">
        <IoIosRepeat color="gray" size={30} />
        <IoShuffleSharp color="gray" size={27} />
      </div>
      <Typography variant="caption" color="gray" fontWeight={400}>
        Playing next
      </Typography>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="track-list__list-holder"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="track-list__play-option"
          >
            <MyTrack
              title={item.title}
              subTitle={item.subTitle}
              avatarFilePath={item.avatar}
              endPartSubTitle={item.year.toString()}
              endPartTitle={timeCalculator(item.duration)}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Drawer>
  );
});
