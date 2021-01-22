import styled from "@emotion/styled";
import { IBoxInput, IBoxBackLabel } from "./types";

export const UnderlineFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: none;
  margin: 0;
  padding: 0;
`;

export const UnderlineLabel = styled.label`
  font-family: "Roboto";
  font-size: 10px;
  color: #5b7289;
  margin-bottom: 10px;
`;

export const UnderlineInput = styled.input`
  font-family: "Roboto";
  border: none;
  outline: none;

  padding-left: 10px;
  margin-bottom: 5px;
`;

export const BorderBottom = styled.div`
  width: 100%;
  height: 2px;
  background-color: #317bda;
`;

export const BoxFieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const BoxFieldSetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoxLabel = styled.label`
  font-family: "Roboto";
  font-size: 15px;
  color: #484848;
  width: 150px;
  margin-right: 20px;
`;

export const BoxInput = styled.input<IBoxInput>`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 2px;
  height: 40px;
  padding-left: 10px;
  outline: none;

  ${({ error }) => error && `border-color: red`};
`;

export const BoxBackLabel = styled.span<IBoxBackLabel>`
  padding-left: 10px;
  ${({ error }) => error && `color: red`};
`;

export const BoxError = styled.span`
  margin-left: 170px;
  position: relative;
  top: 5px;

  font-family: "Roboto";
  font-size: 13px;
  color: red;
`;
