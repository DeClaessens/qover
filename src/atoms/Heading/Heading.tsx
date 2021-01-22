import React from "react";
import { IHeading } from "./types";
import { Title, Heading1, Heading2 } from "./styledComponents";

const Heading = ({ variant, text, color }: IHeading) => {
  switch (variant) {
    case "title":
      return <Title color={color}>{text}</Title>;
    case "h1":
      return <Heading1 color={color}>{text}</Heading1>;
    default:
      return <Heading2 color={color}>{text}</Heading2>;
  }
};

export default Heading;
