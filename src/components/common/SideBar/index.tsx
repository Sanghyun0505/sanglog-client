import Image from "next/image";
import * as S from "./style";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { SIDEBAR_ITEMS } from "@/constants/SideBar/sidebar.constant";
import { useSetRecoilState } from "recoil";
import { AuthSignInUpAtom } from "@/stores/common/common.store";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { useLoggout } from "@/hooks/Auth/useLogout";
import { SidBarItems } from "@/types/Sidebar/sidebar.type";

export default function SideBar() {
  const router = useRouter();
  const setOpenAuthModal = useSetRecoilState(AuthSignInUpAtom);
  const { handleLoggout } = useLoggout();

  const handleClick = (item: SidBarItems) => {
    if (item.id === 2) {
      if (item.title === "로그아웃") {
        handleLoggout();
      } else {
        setOpenAuthModal(true);
        document.body.style.overflow = "hidden";
      }
    } else {
      router.push(item.link!!);
    }
  };

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
            onClick={() => handleClick(item)}
          >
            {item.title}
          </S.LinkLi>
        ))}
      </S.LinkUl>
    </S.SideBarContainer>
  );
}
