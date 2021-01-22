import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  padding: 60px 220px;

  > fieldset {
    margin-bottom: 20px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  > fieldset {
    flex-shrink: 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 170px;
  width: 163px;
`;

export const GeneralError = styled.span`
  display: block;
  color: red;
  font-size: 13px;
  margin-left: 170px;
  margin-bottom: 40px;
`;
