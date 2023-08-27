import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { useToastAlert } from "@/hooks/common/useToastAlert";
import token from "@/libs/Token/token";
import { usePostSignInMutation } from "@/queries/Auth/auth.query";
import { SignInResponse, SignInUpParam } from "@/types/Auth/auth.type";
import React, { useState } from "react";

export const useSignIn = () => {
  const { toastAlert } = useToastAlert();
  const [signInInfo, setSignInInfo] = useState<SignInUpParam>({
    userId: "",
    password: "",
  });

  const postSignInMutation = usePostSignInMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userId, password } = signInInfo;

    if (userId.trim() === "") {
      return toastAlert("ID를 입력해주세요", "warning");
    }

    if (password.trim() === "") {
      return toastAlert("PW를 입력해주세요", "warning");
    }

    postSignInMutation.mutateAsync(signInInfo, {
      onSuccess: (res: SignInResponse) => {
        token.setCookie(ACCESS_TOKEN_KEY, res.access_token);
        window.location.replace("/");
      },
      onError: (e) => {
        toastAlert("로그인에 실패하였습니다.", "error");
      },
    });
  };
  return { handleChange, signInInfo, handleSubmit };
};
