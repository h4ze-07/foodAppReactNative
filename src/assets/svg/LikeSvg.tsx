import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LikeSvg = (props: SvgProps) => (
  <Svg
    height="512px"
    id="Layer_1"
    viewBox="0 0 512 512"
    width="512px"
    fill='black'
    {...props}
  >
    <Path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
  </Svg>
);
export default LikeSvg;
