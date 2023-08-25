import GlobalStyle from "@/styles/GlobalStyles";
import * as S from "./style";
import { ReactNode } from "react";
const SideBar = dynamic(() => import("@/components/common/SideBar"), {
  ssr: false,
});
import { HideSideBarAtom, AuthAtom } from "@/stores/common/common.store";
import { useRecoilValue } from "recoil";
import Auth from "../Auth";
import dynamic from "next/dynamic";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const isHideSideBar = useRecoilValue(HideSideBarAtom);
  const isOpenAuthModal = useRecoilValue(AuthAtom);
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
