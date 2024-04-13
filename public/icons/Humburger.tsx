import React from "react";
import type { SVGProps } from "react";

const Humburger = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6.001h18m-18 6h18m-18 6h18"
      ></path>
    </svg>
  );
};

export default Humburger