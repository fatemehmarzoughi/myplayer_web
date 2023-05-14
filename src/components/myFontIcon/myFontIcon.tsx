import clsx from "clsx";
import React, { useMemo } from "react";

import "./styles/my-font-icon.scss";
import { Tooltip, TooltipProps } from "@mui/material";

export type IMyFontIconProps = {
  children: React.ReactNode;

  circle?: boolean;
  iconOnly?: boolean;
  variant?: "filled" | "outline" | "none";
  classes?: {
    root?: string;
  };
  onClick?: () => void;

  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const MyFontIcon: React.FC<IMyFontIconProps> = React.memo(
  ({
    children,

    onClick,
    classes,
    circle = false,
    variant = "none",
    iconOnly = false,
    tooltipProps,
  }) => {

    const _render_content = useMemo(
      () => (
        <span
          onClick={onClick}
          className={clsx(
            "my-font-icon",
            `my-font-icon__${variant}`,
            circle && `my-font-icon--circle`,
            !iconOnly && "my-font-icon__clickable",
            classes?.root
          )}
        >
          {children}
        </span>
      ),
      [children, circle, classes?.root, iconOnly, onClick, variant]
    );

    if (tooltipProps)
      return <Tooltip {...tooltipProps}>{_render_content}</Tooltip>;
    else return _render_content;
  }
);
