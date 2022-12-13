import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path d="M210.6 184.404h90.159v80.644H210.6z" />
      <path d="M15.019 268.598c-2.193 0-4.419-.496-6.527-1.544C1.02 263.338-2.111 254.09 1.5 246.399l60.152-128.14a15.3 15.3 0 015.893-6.591L247.863 2.146a14.657 14.657 0 0115.273 0l180.318 109.521a15.303 15.303 0 015.851 6.501l61.154 128.14c3.659 7.668.587 16.936-6.862 20.702s-16.452.604-20.113-7.063L424.31 135.958 255.499 33.426 86.734 135.931 28.56 259.857c-2.593 5.523-7.956 8.741-13.541 8.741z" />
      <path d="M456.41 272.873l-55.321-115.919-145.59-88.428-145.455 88.346-54.328 115.733c-6.337 13.501-18.937 22.911-33.277 25.357V512H122.69V353.828c0-8.284 6.716-15 15-15h236.62c8.284 0 15 6.716 15 15V512h99.61V297.851c-13.966-2.6-26.233-11.831-32.51-24.978zm-125.598 7.642c0 8.542-6.728 15.467-15.027 15.467H195.574c-8.299 0-15.026-6.925-15.026-15.467V168.937c0-8.542 6.728-15.467 15.026-15.467h120.212c8.299 0 15.027 6.925 15.027 15.467v111.578z" />
      <path d="M359.31 380.436l-74.335 44.978 74.335 44.978zM191.456 482h129.088L256 442.946zM152.69 470.392l74.335-44.978-74.335-44.978zM256 407.882l64.545-39.054H191.456z" />
    </Svg>
  );
};

export default Icon;