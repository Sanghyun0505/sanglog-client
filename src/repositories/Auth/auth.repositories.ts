import { SignInResponse, SignInUpParam } from "@/types/Auth/auth.type";
import { AuthRepository } from "./auth.repository";
import axios from "axios";
import { customAxios } from "@/libs/Axios/customAxios";

class AuthRepositoryImpl implements AuthRepository {
  public async postSignIn(signInData: SignInUpParam): Promise<SignInResponse> {
    const { data } = await customAxios.post("/auth/signin", signInData);
    return data;
  }

  public async postSignUp(signUpData: SignInUpParam): Promise<void> {
    await customAxios.post("/auth/signup", signUpData);
  }
}

export default new AuthRepositoryImpl();
