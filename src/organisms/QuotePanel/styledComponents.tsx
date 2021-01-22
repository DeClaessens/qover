import styled from "@emotion/styled";
import { IWrapper, IHeadingWrapper, IPriceWrapper, IFeature } from "./types";

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);

  background-color: ${({ selected }) => (selected ? `#31cfda` : `white`)};

  > div,
  li {
    border-bottom: 1px solid rgba(91, 114, 137, 0.1);
  }

  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style-type: none;
    font-family: "Roboto";
    font-size: 12px;
  }
`;

export const HeadingWrapper = styled.div<IHeadingWrapper>`
  padding: 20px 0;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const PriceWrapper = styled.div<IPriceWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 16px 0;

  background-color: ${({ selected }) =>
    selected ? `rgba(255, 255, 255, 0.15)` : `#f5fdfe`};
`;

export const Feature = styled.li<IFeature>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 17px 20px;

  color: ${({ selected }) => (selected ? `white` : `#484848`)};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`;
