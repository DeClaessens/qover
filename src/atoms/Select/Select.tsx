import React from "react";
import { ISelect } from "./types";
import {
  FieldSet,
  FieldSetWrapper,
  Label,
  SelectError,
  SelectInput,
} from "./styledComponents";

const Select = ({ name, label, value, options, error, onChange }: ISelect) => {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <FieldSet>
      <FieldSetWrapper>
        <Label htmlFor={name}>{label}</Label>
        <SelectInput
          name={name}
          value={value}
          onChange={handleChange}
          error={error}
        >
          <option value="">--Please choose an option--</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </SelectInput>
      </FieldSetWrapper>
      {error && <SelectError>{error}</SelectError>}
    </FieldSet>
  );
};

export default Select;
