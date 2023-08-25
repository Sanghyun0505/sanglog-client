import { usePostSignUpMutation } from "@/queries/Auth/auth.query";
import { useState } from "react";
import { SignUpType } from "@/types/Auth/auth.type";
import { useToastAlert } from "@/libs/Toast/toast";

export const useSignUp = () => {
  const { toastAlert } = useToastAlert();
  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    userId: "",
    password: "",
    passwordCheck: "",
  });

  const postsignUpMutation = usePostSignUpMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userId, password, passwordCheck } = signUpInfo;

    if (userId.trim() === "") {
      return toastAlert("ID를 입력해주세요", "warning");
    }

    if (password.trim() === "" || passwordCheck.trim() === "") {
      return toastAlert("PW를 입력해주세요", "warning");
    }

    if (password !== passwordCheck) {
      return toastAlert("PW가 일치하지 않습니다.", "warning");
    }

    postsignUpMutation.mutateAsync(
      { userId, password },
      {
        onSuccess: () => {
          toastAlert("축하합니다! 회원가입을 하셨습니다.", "success");
        },
        onError: () => {
          toastAlert("회원가입에 실패하였습니다!", "error");
        },
      }
    );
  };
  return { handleChange, signUpInfo, handleSubmit };
};
