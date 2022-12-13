import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M79.996 66.915c.01-.432-.124-.89-.438-1.36L64.022 42.262c-.791-1.186-2.643-2.098-4.755-2.342l-4.772-.55c-8.124-.937-16.005.316-21.333 3.392-4.104 2.37-6.333 5.616-6.398 9.126h-.002v3.809a9.214 9.214 0 00.526 3.12l.953 2.755c.422 1.22 2.001 2.289 4.056 2.745l40.341 8.97c3.93.874 7.389-.61 7.359-2.706h.002v-3.666h-.003z"
        fill="#B6C5CE"
      />
      <path
        d="M27.288 55.08c-1.623-4.691.547-9.241 5.875-12.317 5.327-3.076 13.208-4.329 21.333-3.392l4.772.55c2.111.244 3.963 1.156 4.754 2.342l15.536 23.291c1.81 2.714-2.22 5.04-6.92 3.995l-40.34-8.97c-2.055-.456-3.635-1.526-4.057-2.745l-.953-2.755z"
        fill="#D6E5E5"
      />
      <path
        d="M32.732 20.63l.004-.007-.172-.1-.011-.006L8.576 6.806l-.004.008c-.91-.58-2.118-.564-3.447.203C2.295 8.65 0 13.035 0 16.809c0 2.206.787 3.708 2.004 4.255l-.003.007 23.96 13.71c.035.02.068.042.103.06l.026.014.001-.002c.878.432 1.991.355 3.205-.346 2.83-1.634 5.125-6.019 5.124-9.792 0-2.009-.654-3.432-1.688-4.084z"
        fill="#EF5F26"
      />
      <path
        d="M34.42 24.714c0 3.774-2.295 8.158-5.126 9.793-2.83 1.634-5.124-.101-5.124-3.875s2.294-8.158 5.124-9.792c2.831-1.635 5.126.1 5.126 3.874z"
        fill="#FF7E27"
      />
      <path
        d="M42.926 50.672c-.491 0-.989-.125-1.445-.388l-3.946-2.279a6.81 6.81 0 01-3.395-5.88v-6.599c0-.965-.52-1.865-1.355-2.347l-4.26-2.46a2.894 2.894 0 112.894-5.014l4.26 2.46a8.522 8.522 0 014.25 7.361v6.6c0 .356.192.688.5.866l3.947 2.278a2.895 2.895 0 01-1.45 5.402z"
        fill="#8E9DAF"
      />
    </Svg>
  );
};

export default Icon;