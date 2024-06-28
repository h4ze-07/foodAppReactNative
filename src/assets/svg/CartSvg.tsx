import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const CartSvg = (props: any) => (
  <Svg
    height="20px"
    viewBox="0 0 20 20"
    width="20px"
    {...props}
  >
    <Defs />
    <G fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth={1}>
      <G
        fill={props.fill}
        id="Core"
        transform="translate(-212.000000, -422.000000)"
      >
        <G id="shopping-cart" transform="translate(212.000000, 422.000000)">
          <Path
            d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z"
            id="Shape"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default CartSvg;
