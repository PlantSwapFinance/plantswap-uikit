import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M72.477 2.511a8.77 8.77 0 00-12.113 0l-4.883 4.883a1.667 1.667 0 00-.487 1.18v9.76c0 .92.746 1.667 1.667 1.667h9.763c.442 0 .867-.174 1.18-.487l4.883-4.883a8.563 8.563 0 00.01-12.11l-.01-.01h-.01z"
        fill="#455A64"
      />
      <path
        d="M56.66 0H43.329c-.92 0-1.667.747-1.667 1.667v13.334c0 .764.521 1.431 1.263 1.616l13.334 3.333a1.667 1.667 0 002.07-1.617V1.668c0-.92-.747-1.666-1.667-1.666z"
        fill="#4CAF50"
      />
      <path
        d="M47.84 17.154L31.176.488a1.667 1.667 0 00-2.357 0l-10 10c-.65.65-.65 1.706 0 2.357l6.667 6.666c.312.313.735.49 1.176.49h20a1.667 1.667 0 001.18-2.847z"
        fill="#F44336"
      />
      <path
        d="M63.327 80a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zM29.994 80a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
        fill="#455A64"
      />
      <path
        d="M77.911 17.231a1.666 1.666 0 00-1.25-.563H16.662a1.667 1.667 0 00-1.636 1.973l5 26.666c.147.788.834 1.36 1.636 1.36h45.78a8.333 8.333 0 008.27-7.3l2.616-20.826a1.666 1.666 0 00-.417-1.31z"
        fill="#FFC107"
      />
      <path
        d="M69.993 60H31.524a11.696 11.696 0 01-11.44-9.376L11.961 10H3.328a1.667 1.667 0 010-3.333h10c.792 0 1.475.557 1.633 1.333l8.393 41.966a8.356 8.356 0 008.17 6.7h38.47a1.667 1.667 0 010 3.333z"
        fill="#455A64"
      />
    </Svg>
  );
};

export default Icon;
