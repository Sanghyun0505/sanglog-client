import Image from "next/image";
import * as S from "./style";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { useGetMyInfo } from "@/queries/Member/member.query";
import { tokenDecode } from "@/utils/Auth/tokenDecode";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";

export default function Header() {
  const router = useRouter();
  const { data: myInfo } = useGetMyInfo(Number(tokenDecode("sub")));

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.Logo onClick={() => router.push("/")}>
          <Image src={logo} alt="이미지 없음" />
          <p>Sanglog</p>
        </S.Logo>

        {token.getCookie(ACCESS_TOKEN_KEY) && (
          <S.Profile>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png"
              alt="이미지 없음"
            />
            <p>{myInfo?.userId} 님</p>
          </S.Profile>
        )}
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
