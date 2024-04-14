import React from "react";
import type { SVGProps } from "react";

const Flash = (props: SVGProps<SVGSVGElement> & { svgcolor?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.svgcolor || "currentColor"}
        d="M14 16a1 1 0 0 1-.707-1.707l7-7a1 1 0 0 1 1.414 1.414l-7 7A.997.997 0 0 1 14 16M3 17a1 1 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.414 1.414l-6 6A.997.997 0 0 1 3 17"
      ></path>
      <path
        fill={props.svgcolor || "currentColor"}
        d="M14 16a.997.997 0 0 1-.707-.293l-5-5a1 1 0 0 1 1.414-1.414l5 5A1 1 0 0 1 14 16"
      ></path>
    </svg>
  );
};

export default Flash;
