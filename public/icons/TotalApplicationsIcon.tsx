import * as React from "react";
import { SVGProps } from "react";
const TotalApplicationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path fill="#fff" fillOpacity={0} d="M5 5h40v40H5z" />
      </clipPath>
    </defs>
    <circle cx={25} cy={25} r={25} fill="#E8F5FF" />
    <path fill="none" d="M5 5h40v40H5z" />
    <g clipPath="url(#a)">
      <path
        fill="#248CD8"
        fillRule="evenodd"
        d="M18.258 8.333a.76.76 0 0 0-.732.732v2.564h-1.831a.76.76 0 0 0-.733.732v2.93H12.4c-.386-.004-.728.35-.732.732v23.803a.752.752 0 0 0 .732.733h19.043a.752.752 0 0 0 .732-.733v-2.93h2.197c.39.004.746-.347.744-.732l-.011-2.563H37.3a.76.76 0 0 0 .732-.732V15.657c0-.31-.109-.511-.263-.71l-4.932-6.18c-.136-.159-.514-.432-1.03-.434h-13.55Zm.733 1.465h12.45v3.662l-1.316-1.465c-.16-.192-.332-.366-.515-.366H18.99V9.798Zm13.915 1.465 2.93 3.662h-2.93v-3.662Zm-16.479 1.83h12.45v4.762l-1.83-2.198a.92.92 0 0 0-.732-.366h-9.888v-2.198Zm13.916 1.466 2.563 3.66h-2.563v-3.66Zm3.295 1.83h2.93v15.747h-1.465V18.952c0-.366-.057-.697-.366-1.099l-1.099-1.463Zm-6.591 1.465 2.93 4.028h-2.93v-4.029Zm-11.055 1.098v.001a.785.785 0 0 1 .069 0h4.394c.405 0 .733.328.733.733v4.394a.732.732 0 0 1-.733.733h-4.394a.733.733 0 0 1-.733-.733v-4.394a.732.732 0 0 1 .664-.733Zm14.35.733h3.296v15.747h-1.464V22.248c0-.233-.245-.559-.367-.732l-1.464-1.831Zm-14.35 6.958a.785.785 0 0 1 .069 0h12.085a.73.73 0 0 1 .739.732.73.73 0 0 1-.74.732H16.061a.733.733 0 0 1-.069-1.465Zm0 2.93a.785.785 0 0 1 .069 0h12.085a.73.73 0 0 1 .739.732.73.73 0 0 1-.74.732H16.061a.733.733 0 0 1-.069-1.465Zm0 2.929a.785.785 0 0 1 .069 0h12.085a.73.73 0 0 1 .739.732.726.726 0 0 1-.74.732H16.061a.733.733 0 0 1-.069-1.465v.001Zm0 2.93H28.146a.731.731 0 0 1 .739.732.73.73 0 0 1-.74.732H16.061a.73.73 0 0 1-.763-.697.732.732 0 0 1 .694-.767Z"
      />
    </g>
  </svg>
);
export default TotalApplicationsIcon;