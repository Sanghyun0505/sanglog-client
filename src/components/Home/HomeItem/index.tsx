import { useGetAllRegistedPostQuery } from "@/queries/Regist/regist.query";
import * as S from "./style";
import { useRouter } from "next/router";
import { stringEllipsis } from "@/utils/common/sdf";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";

export default function HomeItem() {
  const { data: allPost } = useGetAllRegistedPostQuery({ suspense: true });
  const router = useRouter();
  return (
    <>
      {allPost
        ?.sort((a, b) => b.id - a.id)
        .map((item) => (
          <S.HomeItem
            key={item.id}
            onClick={() => router.push(`/detail/${item.id}`)}
          >
            <S.HomeItemImage backgroundImg={item.image} />
            <S.HomeEtcContainer>
              <S.HomeEtcProfileContainer>
                <FaRegUserCircle size={23} color={"#495057"} />
                <p>doldory55</p>
              </S.HomeEtcProfileContainer>
              <S.HomeEtcTitle>{stringEllipsis(item.title, 16)}</S.HomeEtcTitle>
              <S.HomeEtcSubTitle>
                {stringEllipsis(item.subtitle, 27)}
              </S.HomeEtcSubTitle>
            </S.HomeEtcContainer>
          </S.HomeItem>
        ))}
    </>
  );
}
