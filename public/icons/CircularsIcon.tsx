import * as React from "react";
import { SVGProps } from "react";
const CircularsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#272525"
      d="M10.571 12.685H14.8l-4.229 4.23v-4.23Zm-1.057-.528v4.757H1.057A1.057 1.057 0 0 1 0 15.857v-14.8C0 .474.473 0 1.057 0h12.686c.584 0 1.057.473 1.057 1.058v10.57h-4.757a.528.528 0 0 0-.529.53ZM2.114 3.7c0 .292.237.529.53.529h9.513a.528.528 0 1 0 0-1.057H2.643a.528.528 0 0 0-.529.528Zm0 3.171c0 .292.237.53.53.53h9.513a.529.529 0 0 0 0-1.058H2.643a.528.528 0 0 0-.529.528Zm10.043 3.7a.528.528 0 1 0 0-1.056H2.643a.528.528 0 1 0 0 1.056h9.514Z"
    />
  </svg>
);
export default CircularsIcon;
