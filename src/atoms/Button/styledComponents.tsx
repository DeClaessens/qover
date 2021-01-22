import { css } from "@emotion/react";
import { IButton } from "./types";
import styled from "@emotion/styled";

const getRegularButtonStyling = () => {
  return css`
    background-color: #317bda;
    border: 1px solid #317bda;
    padding: 15px 0;
    border-radius: 3px;
  `;
};

const getOutlinedButtonStyling = () => {
  return css`
    background-color: transparant;
    border: 1px solid white;
  `;
};

const getLightBlueButtonStyling = () => {
  return css`
    background-color: #31cfda;
    border: 1px solid #31cfda;
    padding: 15px 0;
    border-radius: 3px;
  `;
};

const getLightBlueSelectedButtonStyling = () => {
  return css`
    background-color: white;
    border: 1px solid white;
    color: #31cfda;
    padding: 15px 0;
    border-radius: 3px;
  `;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: "Roboto";
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;

  box-sizing: border-box;

  width: 100%;
  padding: 15px 0;
  border-radius: 3px;

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
  background-color: #eee !important;
  border: 1px solid #eee !important;
  color: black !important;
  cursor: not-allowed;
  `};

  > svg {
    margin-right: 10px;
  }

  ${(props: IButton) => {
    switch (props.variant) {
      case "outlined":
        return getOutlinedButtonStyling();
      case "lightblue":
        return getLightBlueButtonStyling();
      case "lightblue-selected":
        return getLightBlueSelectedButtonStyling();
      case "regular":
      default:
        return getRegularButtonStyling();
    }
  }}
`;
