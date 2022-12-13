import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M42.759 48.276H40c0-7.618 6.175-13.793 13.793-13.793h2.758c0 7.617-6.175 13.793-13.792 13.793zM42.759 28.965H40c0-7.617 6.175-13.792 13.793-13.792h2.758c0 7.617-6.175 13.792-13.792 13.792zM40 9.657h2.759c5.332 0 9.655-4.323 9.655-9.656h-2.759C44.323.001 40 4.324 40 9.657z"
        fill="#6A9923"
      />
      <path
        d="M23.532 52.083l-.084-.049-9.673-10.747a3.879 3.879 0 00-5.478-.28l-.021.02V20.923a4.295 4.295 0 00-3.916-4.372A4.138 4.138 0 000 20.69v26.106c0 1.875.478 3.72 1.389 5.358l12.404 22.328V80h19.31V68.586c0-6.82-3.652-13.116-9.57-16.503z"
        fill="#F2BB80"
      />
      <path
        d="M40 62.068a1.38 1.38 0 01-1.38-1.379V8.276a1.38 1.38 0 012.759 0v52.413a1.38 1.38 0 01-1.38 1.38z"
        fill="#88B337"
      />
      <path
        d="M23.448 34.483h2.759C33.824 34.483 40 40.658 40 48.276H37.24c-7.617 0-13.793-6.176-13.793-13.793zM23.448 15.173h2.759C33.824 15.173 40 21.348 40 28.965H37.24c-7.617 0-13.793-6.175-13.793-13.792zM40 9.657H37.24A9.655 9.655 0 0127.586 0h2.759A9.655 9.655 0 0140 9.657z"
        fill="#88B337"
      />
      <path
        d="M19.209 60.31a1.38 1.38 0 01-1.021-.451l-11.3-12.43a5.26 5.26 0 01.172-7.266 1.38 1.38 0 011.95 1.95 2.506 2.506 0 00-.081 3.46l11.299 12.43a1.38 1.38 0 01-1.02 2.307z"
        fill="#E8A16D"
      />
      <path
        d="M46.895 68.586v11.413h19.31v-5.517L78.61 52.154a11.021 11.021 0 001.389-5.358V20.924a4.295 4.295 0 00-3.916-4.372 4.138 4.138 0 00-4.36 4.138v20.336a3.879 3.879 0 00-5.5.26l-9.672 10.748-.085.049a19.017 19.017 0 00-9.57 16.503z"
        fill="#F2BB80"
      />
      <path
        d="M60.792 60.31c.388 0 .759-.164 1.02-.451l11.3-12.43a5.26 5.26 0 00-.172-7.266 1.38 1.38 0 00-1.95 1.95c.947.947.983 2.47.081 3.46l-11.299 12.43a1.38 1.38 0 001.02 2.307z"
        fill="#E8A16D"
      />
    </Svg>
  );
};

export default Icon;
