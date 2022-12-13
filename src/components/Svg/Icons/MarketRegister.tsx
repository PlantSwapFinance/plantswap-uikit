import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path d="M2.758 57.93H77.24v16.553H2.758V57.93z" fill="#F0C419" />
      <path
        d="M80 77.242A2.767 2.767 0 0177.241 80H2.76a2.697 2.697 0 01-1.945-.814A2.697 2.697 0 010 77.241a2.767 2.767 0 012.759-2.758H77.24A2.78 2.78 0 0180 77.24z"
        fill="#3F5C6C"
      />
      <path
        d="M9.655 22.069v30.345H4.138V21.89l5.517.179zM75.862 21.89v30.524h-5.517V22.069l5.517-.18z"
        fill="#A56A43"
      />
      <path
        d="M21.241 0l-5.517 13.793-.552 1.38v1.379a5.517 5.517 0 01-5.517 5.517H5.517A5.51 5.51 0 010 16.552c.002-.9.26-1.78.745-2.538L7.628 3.2A6.86 6.86 0 0113.434 0h7.807z"
        fill="#E64C3C"
      />
      <path
        d="M31.725 0v16.552a5.517 5.517 0 01-5.518 5.517H20.69a5.517 5.517 0 01-5.517-5.517v-1.38L21.242 0h10.483z"
        fill="#ECF0F1"
      />
      <path
        d="M48.275 0v16.552a5.517 5.517 0 01-5.517 5.517h-5.517a5.517 5.517 0 01-5.517-5.517V0h16.551z"
        fill="#E64C3C"
      />
      <path
        d="M64.828 15.172v1.38a5.517 5.517 0 01-5.517 5.517h-5.517a5.517 5.517 0 01-5.518-5.517V0H58.76l6.07 15.172z"
        fill="#ECF0F1"
      />
      <path
        d="M80 16.552a5.51 5.51 0 01-5.518 5.517h-4.138a5.517 5.517 0 01-5.517-5.517v-1.38l-.552-1.379L58.758 0h7.807a6.86 6.86 0 015.807 3.2l6.882 10.814c.484.758.743 1.638.745 2.538z"
        fill="#E64C3C"
      />
      <path
        d="M64.828 15.172v1.38H48.276v-2.759h16l.552 1.38zM31.725 13.793v2.759H15.173v-1.38l.552-1.379h16z"
        fill="#BDC3C7"
      />
      <path
        d="M4.137 13.793h11.586l-.551 1.38v1.379H4.137a1.38 1.38 0 110-2.759zM31.724 13.793h16.551v2.759H31.724v-2.759zM77.24 15.172a1.38 1.38 0 01-1.378 1.38H64.827v-1.38l-.552-1.379h11.587c.761 0 1.379.618 1.379 1.38z"
        fill="#C03A2B"
      />
      <path
        d="M77.241 52.414H2.76a2.759 2.759 0 000 5.517H77.24a2.759 2.759 0 000-5.517z"
        fill="#547580"
      />
      <path
        d="M16.552 44.138H41.38c.761 0 1.38.617 1.38 1.38v6.896H15.172v-6.897c0-.762.617-1.38 1.38-1.38z"
        fill="#35495E"
      />
      <path
        d="M27.587 30.345H16.552a1.38 1.38 0 00-1.38 1.379v2.759c0 .761.618 1.379 1.38 1.379h11.035a1.38 1.38 0 001.379-1.38v-2.758a1.38 1.38 0 00-1.38-1.38z"
        fill="#2FA8CC"
      />
      <path d="M19.31 35.862h5.518v8.276H19.31v-8.276z" fill="#2C3E50" />
      <path
        d="M55.172 41.38l1.38 11.034h5.516l1.38-11.035h-8.276z"
        fill="#2FA8CC"
      />
    </Svg>
  );
};

export default Icon;