import authRepositoryImpl from "@/repositories/Auth/auth.repositories";
import { useMutation } from "react-query";
import { SignInUpParam } from "@/types/Auth/auth.type";

export const usePostSignInMutation = () => {
  const mutate = useMutation((signInData: SignInUpParam) =>
    authRepositoryImpl.postSignIn(signInData)
  );

  return mutate;
};

export const usePostSignUpMutation = () => {
  const mutate = useMutation((signInData: SignInUpParam) =>
    authRepositoryImpl.postSignUp(signInData)
  );

  return mutate;
};
