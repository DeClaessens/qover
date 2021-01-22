import styled from "@emotion/styled";
import { ISelectInput } from "./types";

export const FieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const FieldSetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-size: 15px;
  color: #484848;
  width: 150px;
  margin-right: 19px;
`;

export const SelectInput = styled.select<ISelectInput>`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 2px;
  height: 40px;
  width: 320px;
  padding-left: 10px;

  ${({ error }) => error && `border-color: red`};
`;

export const SelectError = styled.span`
  color: red;
  margin-left: 170px;
  position: relative;
  font-family: "Roboto";
  font-size: 13px;
  top: 5px;
`;
