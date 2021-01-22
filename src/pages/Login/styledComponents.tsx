import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  > svg {
    margin-bottom: 30px;
  }
`;

export const LoginWrapper = styled.div`
  width: 350px;
  box-sizing: border-box;

  > div:first-of-type {
    margin-bottom: 20px;
  }
`;
