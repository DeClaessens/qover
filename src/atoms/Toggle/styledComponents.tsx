import styled from "@emotion/styled";
import { IInner } from "./types";

export const Outer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  padding: 4px 4px 4px 24px;
  border-radius: 20px;

  background-color: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;

  position: relative;
`;

export const Inner = styled.div<IInner>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: white;

  position: absolute;
  ${({ active }) =>
    active
      ? `
      right: 4px;
    `
      : `
      left: 4px;
    `}
`;
