import Image from "next/image";
import * as S from "./style";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <div onClick={() => router.push("/")}>
          <Image src={logo} alt="이미지 없음" />
          <p>sanglog</p>
        </div>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
