import React from "react";
import SVG from "react-inlinesvg";

export type IMySvgNames =
  | "headphone"
  | "heart"
  | "bookmark"
  | "play"
  | "settings"
  | "logo";

export type IMySvgProps = {
  name: IMySvgNames;
  size?: number;
};

export const uniSvgSrc = (name: IMySvgNames) =>
  "/assets/" + name.split(":").join("/") + ".svg";

export const MySvg: React.FC<IMySvgProps> = React.memo(
  ({ name, size = 40 }) => {
    return (
    //   <SVG
    //     src={`svg/${name}.svg`}
    //     color="red"
    //     fontSize={size}
    //     width={size}
    //     height={size}
    //     uniqueHash={name}
    //     uniquifyIDs={true}
    //     preProcessor={code => {
    //         return code.replace(/fill="#B3EBF7"/g, 'fill="var(--color-primary-100)"');
    //       }}
    //   />
      <img src={`svg/${name}.svg`} alt={name} width={size} height={size} />
    );
  }
);
