import { SignInResponse, SignInUpParam } from "@/types/Auth/auth.type";

export interface AuthRepository {
  postSignIn(signInData: SignInUpParam): Promise<SignInResponse>;
  postSignUp(signUpData: SignInUpParam): Promise<void>;
}
