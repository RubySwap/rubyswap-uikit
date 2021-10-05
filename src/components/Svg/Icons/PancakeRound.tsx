import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import RubyPng from "./ruby.png";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image href={RubyPng} width="24" height="24" />
    </Svg>
  );
};

export default Icon;
