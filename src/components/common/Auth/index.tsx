import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "@/hooks/common/useCloseModal";
import { AuthAtom } from "@/stores/common/common.store";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [select, setSelect] = useState(true);
  const setOpenAuthModal = useSetRecoilState(AuthAtom);
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
          {select ? (
            <SignIn setSelect={setSelect} />
          ) : (
            <SignUp setSelect={setSelect} />
          )}
        </S.AuthItemContainer>
      </S.AuthWrapper>
    </S.AuthContainer>
  );
}
