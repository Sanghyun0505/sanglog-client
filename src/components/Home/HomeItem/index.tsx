import { AiFillDelete } from "react-icons/ai";
import { useGetAllRegistedPostQuery } from "@/queries/Regist/regist.query";
import * as S from "./style";
import { useRouter } from "next/router";
import { stringEllipsis } from "@/utils/common/sdf";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { useWrite } from "@/hooks/Write/useWrite";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { tokenDecode } from "@/utils/Auth/tokenDecode";
import { useEffect, useState } from "react";

export default function HomeItem() {
  const { data: allPost } = useGetAllRegistedPostQuery({ suspense: true });
  const router = useRouter();
  const { handleDeleteClick } = useWrite();
  const [mounted, setMounted] = useState<boolean>(false);
  const isAdmin =
    token.getCookie(ACCESS_TOKEN_KEY) && tokenDecode("role") === "ADMIN";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {allPost
        ?.sort((a, b) => b.id - a.id)
        .map((item) => (
          <S.HomeItem key={item.id}>
            <S.HomeItemImage
              onClick={() => router.push(`/detail/${item.id}`)}
              backgroundImg={
                item.image ||
                "https://i.ibb.co/3fBz8rZ/notion-avatar-1688223170024-removebg-preview-2.png"
              }
            />
            <S.HomeEtcContainer>
              <S.HomeEtcWrapper>
                <S.HomeEtcProfileContainer>
                  <FaRegUserCircle size={23} color={"#495057"} />
                  <p>doldory55</p>
                </S.HomeEtcProfileContainer>

                {mounted && isAdmin && (
                  <div onClick={(e) => handleDeleteClick(e, item.id)}>
                    <AiFillDelete cursor={"pointer"} color={"#495057"} />
                  </div>
                )}
              </S.HomeEtcWrapper>
              <S.HomeEtcTitle>{item.title}</S.HomeEtcTitle>
              <S.HomeEtcSubTitle>
                {stringEllipsis(item.subtitle, 27)}
              </S.HomeEtcSubTitle>
            </S.HomeEtcContainer>
          </S.HomeItem>
        ))}
    </>
  );
}
