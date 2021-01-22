import styled from "@emotion/styled";
import { IHeader } from "./types";

const Header = styled.span`
  font-family: "Roboto";
  font-size: 18px;

  display: block;

  margin: 0;
  padding: 0;

  text-align: center;
  color: ${({ color }) => color || "#5b7289"};
`;

export const Heading1 = styled(Header)<IHeader>`
  font-weight: bold;
  color: ${({ color }) => color || "black"};
`;
export const Heading2 = styled(Header)<IHeader>`
  font-weight: normal;
  ${({ color }) => `color: ${color}`};
`;

export const Title = styled(Header)<IHeader>`
  font-size: 26px;
  font-weight: bold;
  ${({ color }) => `color: ${color}`};
`;
