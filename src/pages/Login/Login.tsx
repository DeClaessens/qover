import React, { useState } from "react";
import Button from "../../atoms/Button";
import LoginPanel from "../../organisms/LoginPanel";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Banner from "../../atoms/Banner";
import MainLayout from "../../layouts/MainLayout";
import { LoginAttempt } from "./types";
import { ILogin } from "./types";
import { LoginWrapper, Wrapper } from "./styledComponents";

const Login = ({ onSuccesfulLogin }: ILogin) => {
  const [error, setError] = useState<string>("");
  const handleAttemptSignIn = ({ username, password }: LoginAttempt) => {
    if (username === "Qover" && password === "Ninja") {
      onSuccesfulLogin();
    }

    setError("Username/Password credentials are invalid");
  };

  return (
    <MainLayout>
      <Wrapper>
        <Banner />
        <Logo />
        <LoginWrapper>
          <LoginPanel onAttemptSignIn={handleAttemptSignIn} error={error} />
          <Button variant="outlined" onClick={() => console.log("my friend")}>
            Don't have an account? <u>Ask access</u>
          </Button>
        </LoginWrapper>
      </Wrapper>
    </MainLayout>
  );
};

export default Login;
