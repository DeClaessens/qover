import React from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import useInputValue from "../../hooks/useInputValue";
import { ReactComponent as CheckboxSvg } from "../../images/checked.svg";
import {
  ErrorMessage,
  InputContainer,
  TextButtonContainer,
  Wrapper,
} from "./styledComponents";
import { ILoginPanel } from "./types";

const LoginPanel = ({ error, onAttemptSignIn }: ILoginPanel) => {
  const username = useInputValue<string>("");
  const password = useInputValue<string>("");

  const handleClick = () => {
    onAttemptSignIn({ username: username.value, password: password.value });
  };

  const isDisabled = (): Boolean => {
    if (username.value === "" || password.value === "") return true;

    return false;
  };

  return (
    <Wrapper>
      <Heading variant="h2" text="Welcome at Qover" />
      <InputContainer>
        <Input
          name="username"
          label="Username"
          type="text"
          {...username}
          variant="underlined"
        />
        <Input
          name="password"
          label="Password"
          type="password"
          {...password}
          variant="underlined"
        />
        <TextButtonContainer>
          <span>
            <CheckboxSvg />
            Remember me
          </span>
          <span>Forgot your password?</span>
        </TextButtonContainer>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button variant="regular" disabled={isDisabled()} onClick={handleClick}>
        Sign in to your account
      </Button>
    </Wrapper>
  );
};

export default LoginPanel;
