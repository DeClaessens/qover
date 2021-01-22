import styled from "@emotion/styled";
import { IFrequencyLabel } from "./types";
import BackgroundTravel from "../../images/background-travel.svg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("${BackgroundTravel}") top center no-repeat,
    rgba(72, 72, 72, 0.05);
  background-size: contain;

  width: 100%;
  height: 100%;
  > div:not(:last-of-type) {
    margin-right: 15px;
  }

  > span:first-of-type {
    margin-bottom: 40px;
  }
`;

export const FrequencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;

  > div {
    margin: 0 10px;
  }
`;

export const FrequencyLabel = styled.span<IFrequencyLabel>`
  font-family: "Roboto";
  text-transform: uppercase;
  color: white;
  font-size: 13px;
  ${({ selected }) => selected && `font-weight: bold`};
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const QuoteWrapper = styled.div`
  width: 323px;
  box-sizing: border-box;
`;
