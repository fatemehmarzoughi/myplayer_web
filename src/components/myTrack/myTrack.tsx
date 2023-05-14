import { Divider, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { HiOutlineBars3} from 'react-icons/hi2';

import "./styles/my-track.scss";

export type IMyTrackProps = {
  avatarFilePath: string;
  title: string;
  subTitle: string;

  endPartTitle: string;
  endPartSubTitle: string;

  classes?: {
    root?: string;
    endPart?: string;
    startPart?: string;
    middlePart?: string;
  };
};

export const MyTrack: React.FC<IMyTrackProps> = React.memo(
  ({
    title,
    subTitle,
    endPartTitle,
    avatarFilePath,
    endPartSubTitle,

    classes,
  }) => {
    return (
      <div className={clsx("my-track", classes?.root)}>
        <div className={clsx("my-track__start-part", classes?.startPart)}>
            <HiOutlineBars3 color="gray" />
          <img width={35} height={35} src={avatarFilePath ?? "logo192.png"} alt={title} />
          <span className={clsx("my-track__middle-part", classes?.middlePart)}>
            <Typography variant="body2" fontWeight={700} >{title}</Typography>
            <Typography variant='caption' fontWeight={400} color="GrayText">{subTitle}</Typography>
          </span>
        </div>
        <span className={clsx("my-track__end-part", classes?.endPart)}>
          <Typography variant="body2" fontWeight={700}>{endPartTitle}</Typography>
          <Typography variant='caption' fontWeight={400} color="GrayText">{endPartSubTitle}</Typography>
        </span>
      </div>
    );
  }
);
