import { useGetRegistedPostById } from "@/queries/Regist/regist.query";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import * as S from "./style";
import Header from "@/components/common/Header";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import prism from "prismjs";
import "prismjs/themes/prism.css";

interface Props {
  id: number;
}

export default function DetailItem({ id }: Props) {
  const { data } = useGetRegistedPostById(id, {
    suspense: true,
  });
  return (
    <S.DetailItemContainer>
      <Header />
      <S.DetailItemWrapper>
        <S.DetailItemViewContainer>
          <S.DetailItemTitle>{data?.title}</S.DetailItemTitle>
          <Viewer
            initialValue={data?.content}
            plugins={[[codeSyntaxHighlight, { highlighter: prism }]]}
          />
        </S.DetailItemViewContainer>
      </S.DetailItemWrapper>
    </S.DetailItemContainer>
  );
}
