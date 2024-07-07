import React from "react";
import type { SVGProps } from "react";

export default function VerticalLine(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <circle cx={10.5} cy={10.5} r={1}></circle>
        <circle cx={10.5} cy={5.5} r={1}></circle>
        <circle cx={10.5} cy={15.5} r={1}></circle>
      </g>
    </svg>
  );
}
