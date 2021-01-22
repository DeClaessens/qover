export interface ILogin {
  onSuccesfulLogin: () => void;
}

export interface LoginAttempt {
  username: string;
  password: string;
}
