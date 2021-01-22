import React from "react";
import { IButton } from "./types";
import { Wrapper } from "./styledComponents";

const Button = ({ variant, children, disabled, onClick }: IButton) => {
  return (
    <Wrapper
      variant={variant}
      onClick={() => !disabled && onClick()}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
