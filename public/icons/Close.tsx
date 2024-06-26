import React from "react";
import type { SVGProps } from "react";

const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M5 5L19 5">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.2s"
            dur="0.2s"
            values="M5 5L19 5;M5 5L19 19"
          ></animate>
        </path>
        <path d="M5 12H19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.2s"
            values="M5 12H19;M12 12H12"
          ></animate>
          <set attributeName="opacity" begin="0.2s" to={0}></set>
        </path>
        <path d="M5 19L19 19">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.2s"
            dur="0.2s"
            values="M5 19L19 19;M5 19L19 5"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

export default Close;
