import React from "react";
import { IToggle } from "./types";
import { Inner, Outer } from "./styledComponents";

const Toggle = ({ active, onToggle }: IToggle) => {
  return (
    <Outer onClick={onToggle}>
      <Inner active={active} />
    </Outer>
  );
};

export default Toggle;
