import React from "react";
import { IPriceTag } from "./types";
import { Label, Tag, Wrapper } from "./styledComponents";

const PriceTag = ({ amount, label, color }: IPriceTag) => {
  return (
    <Wrapper color={color}>
      <Tag>{amount}</Tag>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default PriceTag;
