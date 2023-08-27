import GlobalStyle from "@/styles/GlobalStyles";
import * as S from "./style";
import { ReactNode } from "react";
const SideBar = dynamic(() => import("@/components/common/SideBar"), {
  ssr: false,
});
import {
  SideBarHideAtom,
  AuthSignInUpAtom,
} from "@/stores/common/common.store";
import { useRecoilValue } from "recoil";
import Auth from "../Auth";
import dynamic from "next/dynamic";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const isHideSideBar = useRecoilValue(SideBarHideAtom);
  const isOpenAuthModal = useRecoilValue(AuthSignInUpAtom);
  return (
    <>
      <GlobalStyle />
      {isOpenAuthModal && <Auth />}
      <S.Container>
        <S.Wrapper>
          {!isHideSideBar && <SideBar />}
          <>{children}</>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
