import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import logo from "./logo.svg"

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <Svg viewBox="0 0 210 32" {...props}>
          <image href={logo} height={30}/>
      </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
