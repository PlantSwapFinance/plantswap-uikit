import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M58.204 18.652c-5.666-3.179-11.985-.968-18.26-.778-5.893.178-11.746-1.863-16.98 1.27L21.13 20.24a22.875 22.875 0 00-11.002 22.041S12.311 65.543 22.4 73.974a9.838 9.838 0 007.813 1.519c.354.395.597.633.597.633 6.085 5.165 12.756 5.165 16.85 0 0 0 .306-.3.734-.79a9.834 9.834 0 008.397-1.362c8.725-6.217 12.763-31.494 12.763-31.494a22.874 22.874 0 00-11.35-23.828z"
        fill="#BF0025"
      />
      <path
        d="M45.168 23.625c1.218-.423 2.306.893 1.69 2.027-.95 1.745-2.689 3.605-5.861 4.161-6.446 1.13-8.573-3.521-8.772-4.983-.17-1.245 7.216.784 12.943-1.205z"
        fill="#8F001C"
      />
      <path
        d="M40.172 23.68c1.675-6.277.055-13.25-4.868-18.174C30.378.583 23.405-1.037 17.13.638c-1.675 6.277-.056 13.25 4.868 18.174 4.924 4.924 11.897 6.544 18.174 4.868z"
        fill="#5B9617"
      />
      <path
        d="M39.94 27.798a2.659 2.659 0 01-2.625-2.262c-.059-.39-1.334-9.65 7.934-18.129a2.659 2.659 0 013.588 3.923c-7.2 6.587-6.275 13.346-6.265 13.413a2.657 2.657 0 01-2.632 3.055z"
        fill="#8F001C"
      />
    </Svg>
  );
};

export default Icon;
