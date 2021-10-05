import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import gem from "./gem.svg"

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
        <image href={gem} width={32}/>
    </Svg>
  );
};

export default Icon;
