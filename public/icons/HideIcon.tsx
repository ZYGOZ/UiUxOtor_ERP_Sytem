import * as React from "react";
import { SVGProps } from "react";
const HideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        stroke="#777"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.764 5.295A8.64 8.64 0 0 1 12 5c3.757 0 6.564 2.44 8.232 4.44a3.96 3.96 0 0 1 0 5.12c-.191.231-.398.466-.62.704M12.5 9.04a3.004 3.004 0 0 1 2.459 2.459M3 3l18 18m-9.5-6.041A3.006 3.006 0 0 1 9.17 13m5.104 5.694A8.624 8.624 0 0 1 12 19c-3.758 0-6.564-2.44-8.233-4.44a3.96 3.96 0 0 1 0-5.12c.18-.217.375-.439.582-.662"
      />
    </g>
  </svg>
);
export default HideIcon;
