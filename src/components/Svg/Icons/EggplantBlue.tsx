import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M15.024 19.611s1.153-8.066 7.448-9.122c7.085-1.188 11.237 4.312 14.012 10.602 2.775 6.29 4.024 9.648 7.585 15.355C51.284 48.01 66.623 49.972 66.09 62.57c-.613 14.504-17.045 24.712-35.896 10.876-20.89-15.333-15.17-53.836-15.17-53.836z"
        fill="#2B5D99"
      />
      <path
        d="M35.458 18.937c-2.69-8.87-8.971-10.627-12.35-10.303-.354-1.441-.588-3.335-.065-5.047a2.775 2.775 0 00-5.308-1.623c-1.049 3.434-.39 6.924.287 9.128-1.216 1.139-2.243 2.731-2.906 5.004-1.294 4.44-.808 11.593-.808 11.593s2.011-3.083 2.566-6.475c.399-2.436.623-4.62.623-4.62s.95 1.259 2.152 3.202c1.203 1.942 5.088 3.977 5.088 3.977s.74-3.145.766-5.735c.027-2.59 0-4.856 0-4.856s2.31 1.954 4.506 3.222c3.16 1.824 5.449 2.533 5.449 2.533z"
        fill="#5B9617"
      />
    </Svg>
  );
};

export default Icon;