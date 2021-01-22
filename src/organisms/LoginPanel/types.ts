import { LoginAttempt } from "../../pages/Login/types";
export interface ILoginPanel {
  error: string;
  onAttemptSignIn: (dto: LoginAttempt) => void;
}
