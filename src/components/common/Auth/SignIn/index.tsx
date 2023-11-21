import { Dispatch, SetStateAction } from "react";
import * as S from "../style";
import { useSignIn } from "@/hooks/Auth/useSignIn";

interface Props {
  setSignInUpModal: Dispatch<SetStateAction<"signIn" | "signUp">>;
}

export default function Auth({ setSignInUpModal }: Props) {
  const { handleChange, handleSubmit, signInInfo } = useSignIn();
  const { userId, password } = signInInfo;
  return (
    <S.SignInWrapper>
      <S.AuthText>로그인</S.AuthText>
      <S.AuthInputForm onSubmit={handleSubmit}>
        <S.SingInInputBar
          type="text"
          placeholder="ID를 입력해주세요"
          onChange={handleChange}
          value={userId}
          name="userId"
        />
        <S.SingInInputBar
          type="password"
          placeholder="PW를 입력해주세요"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <S.AuthBtn type="submit">로그인</S.AuthBtn>
        <S.NotAccountText>
          계정이 없으신가요?{" "}
          <span onClick={() => setSignInUpModal("signUp")}>회원가입</span>하기
        </S.NotAccountText>
      </S.AuthInputForm>
    </S.SignInWrapper>
  );
}
