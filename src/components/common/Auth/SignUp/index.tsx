import { Dispatch, SetStateAction } from "react";
import * as S from "../style";
import { useSignUp } from "@/hooks/Auth/useSignUp";

interface Props {
  setSignInUpModal: Dispatch<SetStateAction<"signIn" | "signUp">>;
}

export default function SignUp({ setSignInUpModal }: Props) {
  const { handleChange, handleSubmit, signUpInfo } = useSignUp();
  const { userId, password, passwordCheck } = signUpInfo;
  return (
    <S.SignInWrapper>
      <S.AuthText>회원가입</S.AuthText>
      <S.AuthInputForm onSubmit={handleSubmit}>
        <S.SingInInputBar
          type="text"
          placeholder="ID를 입력해주세요"
          name="userId"
          value={userId}
          onChange={handleChange}
        />
        <S.SingInInputBar
          type="password"
          placeholder="PW를 입력해주세요"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <S.SingInInputBar
          type="password"
          placeholder="PW를 입력해주세요"
          name="passwordCheck"
          value={passwordCheck}
          onChange={handleChange}
        />
        <S.AuthBtn type="submit">회원가입</S.AuthBtn>
        <S.NotAccountText>
          계정이 이미 있으신가요?{" "}
          <span onClick={() => setSignInUpModal("signIn")}>로그인</span>
          하기
        </S.NotAccountText>
      </S.AuthInputForm>
    </S.SignInWrapper>
  );
}
