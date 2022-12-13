import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M53.454 64.792l-.16-.092a8.864 8.864 0 01-4.42-7.656v-9.252a5.635 5.635 0 00-2.866-4.943 5.625 5.625 0 00-4.457-.516v-5.744c.005-.599-.354-1.171-1.094-1.598-1.623-.937-4.456-.82-6.33.262-1.02.59-1.543 1.342-1.548 2.058h-.002l.002 10.145a15.979 15.979 0 00-6.954 13.15v7.301c0 4.841 2.604 9.353 6.797 11.774a2.378 2.378 0 102.378-4.118 8.864 8.864 0 01-4.42-7.656v-7.302c0-2.251.69-4.42 1.915-6.237v9.451c0 4.842 2.605 9.353 6.799 11.774l.28.162a2.378 2.378 0 102.377-4.119l-.28-.161a8.863 8.863 0 01-4.42-7.655V50.301l1.133-.666v10.74c0 4.84 2.605 9.352 6.798 11.773l.252.146a2.378 2.378 0 102.377-4.119l-.251-.145a8.865 8.865 0 01-4.42-7.656V46.883a.918.918 0 01.706.094c.176.1.472.341.472.815v9.252c0 4.842 2.605 9.354 6.799 11.774l.16.093a2.377 2.377 0 102.377-4.12z"
        fill="#B6C5CE"
      />
      <path
        d="M40.003 38.645c-1.874 1.081-4.708 1.199-6.33.262-1.622-.936-1.418-2.572.455-3.654 1.873-1.081 4.707-1.2 6.33-.262 1.622.937 1.418 2.572-.455 3.654z"
        fill="#D6E5E5"
      />
      <path
        d="M40.624 1.75c-.004-.468-.289-.914-.868-1.249-1.287-.743-3.536-.65-5.023.208-.79.457-1.206 1.038-1.228 1.593h-.001v34.453c.015.459.3.896.868 1.224 1.288.744 3.537.65 5.024-.208.822-.475 1.237-1.084 1.228-1.659l.002-34.362h-.002z"
        fill="#EF5F26"
      />
      <path
        d="M39.395 3.401c-1.487.859-3.735.952-5.023.209-1.287-.744-1.126-2.042.36-2.9C36.22-.15 38.468-.243 39.757.5c1.287.744 1.126 2.042-.361 2.9z"
        fill="#FF7E27"
      />
    </Svg>
  );
};

export default Icon;