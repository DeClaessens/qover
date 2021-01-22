import React from "react";
import {
  BorderBottom,
  BoxBackLabel,
  BoxError,
  BoxFieldSet,
  BoxFieldSetWrapper,
  BoxInput,
  BoxLabel,
  UnderlineFieldSet,
  UnderlineInput,
  UnderlineLabel,
} from "./styledComponents";
import { IInput } from "./types";

const Input = ({
  name,
  label,
  type,
  value,
  error,
  variant,
  step,
  backLabel,
  onChange,
}: IInput) => {
  const renderUnderlineInput = () => {
    return (
      <UnderlineFieldSet>
        <UnderlineLabel htmlFor={name}>{label}</UnderlineLabel>
        <UnderlineInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <BorderBottom />
      </UnderlineFieldSet>
    );
  };

  const renderBoxInput = () => {
    return (
      <>
        <BoxFieldSet>
          <BoxFieldSetWrapper>
            <BoxLabel htmlFor={name}>{label}</BoxLabel>
            <BoxInput
              type={type}
              name={name}
              value={value}
              step={step}
              error={error}
              onChange={onChange}
            />
            {backLabel && (
              <BoxBackLabel error={error}>{backLabel}</BoxBackLabel>
            )}
          </BoxFieldSetWrapper>

          {error && <BoxError>{error}</BoxError>}
        </BoxFieldSet>
      </>
    );
  };

  return (
    <>{variant === "underlined" ? renderUnderlineInput() : renderBoxInput()}</>
  );
};

export default Input;
