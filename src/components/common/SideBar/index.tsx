import Image from "next/image";
import * as S from "./style";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { SIDEBAR_ITEMS } from "@/constants/SideBar/sidebar.constant";
import { useSetRecoilState } from "recoil";
import { AuthAtom } from "@/stores/common/common.store";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { useLoggout } from "@/hooks/Auth/useLogout";

export default function SideBar() {
  const router = useRouter();
  const setOpenAuthModal = useSetRecoilState(AuthAtom);
  const { handleLoggout } = useLoggout();
  return (
    <S.SideBarContainer>
      <S.SideBarLogoContainer onClick={() => router.push("/")}>
        <Image src={logo} alt="이미지 없음" />
        <p>sanglog</p>
      </S.SideBarLogoContainer>
      <S.LinkUl>
        {SIDEBAR_ITEMS.map((item) => (
          <S.LinkLi
            key={item.id}
            isSelect={router.pathname === item.link}
            onClick={() => {
              item.id === 2
                ? item.title === "새 글 작성"
                  ? router.push(item.link!!)
                  : (setOpenAuthModal(true),
                    (document.body.style.overflow = "hidden"))
                : router.push(item.link!!);
            }}
          >
            {item.title}
          </S.LinkLi>
        ))}
        {token.getCookie(ACCESS_TOKEN_KEY) && (
          <S.LinkLi onClick={handleLoggout}>로그아웃</S.LinkLi>
        )}
      </S.LinkUl>
    </S.SideBarContainer>
  );
}
