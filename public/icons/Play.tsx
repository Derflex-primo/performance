import React from "react";
import type { SVGProps } from "react";

const Play = (props: SVGProps<SVGSVGElement> & { svgcolor?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4.8em"
      height="4.8em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.svgcolor || "currentColor"}
        d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      ></path>
    </svg>
  );
};

export default Play;
