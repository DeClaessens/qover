import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => color};
`;
export const Tag = styled.span`
  font-family: "Roboto";
  font-size: 38px;
  font-weight: bold;
`;
export const Label = styled.span`
  font-family: "Roboto";
  font-size: 11px;
  text-transform: uppercase;
`;
