import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
          d="M70.706 76.832l-2.837-54.783a2.868 2.868 0 00-2.864-2.72h-8.37v-2.692C56.635 7.463 49.171 0 39.997 0 30.823 0 23.36 7.463 23.36 16.637v2.692h-8.37a2.868 2.868 0 00-2.865 2.72L9.28 76.984A2.869 2.869 0 0012.145 80h55.708a2.868 2.868 0 002.853-3.168zm-43.26-45.894a3.072 3.072 0 110-6.145 3.072 3.072 0 010 6.145zM48.102 19.33h-16.21v-2.693c0-4.469 3.636-8.105 8.105-8.105 4.47 0 8.105 3.636 8.105 8.105v2.692zm4.45 11.608a3.072 3.072 0 11.001-6.145 3.072 3.072 0 010 6.145z"
        />
    </Svg>
  );
};

export default Icon;
