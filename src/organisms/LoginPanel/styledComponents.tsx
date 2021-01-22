import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px 20px 20px;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 #d4dce2;
  box-sizing: border-box;

  > span {
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  > fieldset {
    margin-bottom: 20px;
  }

  margin-bottom: 35px !important;
`;

export const TextButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
  font-size: 12px;

  & span:first-of-type {
    font-size: 12px;
    color: #5b7289;
    flex: 1;

    display: flex;
    align-items: center;

    > svg {
      margin-right: 5px;
      cursor: pointer;
    }
  }
  & span:last-of-type {
    color: #317bda;
    font-weight: 500;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";

  background-color: #ff6161;
  border-radius: 3px;

  padding: 15px 0;
  color: white;
  font-size: 13px;

  margin-bottom: 10px;
`;
