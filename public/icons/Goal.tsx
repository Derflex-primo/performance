import React from "react";
import type { SVGProps } from "react";

const Goal = (props: SVGProps<SVGSVGElement> & { svgColor?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="none"
        stroke={props.svgColor || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5.5v13m0-13l9 4.5l-9 4.5"
      ></path>
    </svg>
  );
};

export default Goal;
