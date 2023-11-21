import { useRecoilState, useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "@/hooks/common/useCloseModal";
import {
  AuthSignInUpAtom,
  SignInUpModalAtom,
} from "@/stores/common/common.store";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [signInUpModal, setSignInUpModal] = useRecoilState(SignInUpModalAtom);
  const setOpenAuthModal = useSetRecoilState(AuthSignInUpAtom);
  useCloseModal(setOpenAuthModal);
  return (
    <S.AuthContainer
      onClick={() => {
        setOpenAuthModal(false);
        document.body.style.overflow = "unset";
      }}
    >
      <S.AuthWrapper onClick={(e) => e.stopPropagation()}>
        <S.AuthItemContainer>
          {signInUpModal === "signIn" ? (
            <SignIn setSignInUpModal={setSignInUpModal} />
          ) : (
            <SignUp setSignInUpModal={setSignInUpModal} />
          )}
        </S.AuthItemContainer>
      </S.AuthWrapper>
    </S.AuthContainer>
  );
}
