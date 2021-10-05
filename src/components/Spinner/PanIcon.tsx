import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";
import miningGif from "./mining_pixelated.gif"


const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <image href={miningGif}/>
    </Svg>
  );
};

export default Icon;
