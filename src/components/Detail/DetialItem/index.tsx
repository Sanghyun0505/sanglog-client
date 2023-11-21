import { useGetRegistedPostById } from "@/queries/Regist/regist.query";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import * as S from "./style";
import Header from "@/components/common/Header";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import prism from "prismjs";
import "prismjs/themes/prism.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { CommentType } from "@/types/detail/detail.type";
import { DetailCommentAtom } from "@/stores/detail/detail.store";

interface Props {
  id: number;
}

export default function DetailItem({ id }: Props) {
  const [comment, setComment] =
    useRecoilState<CommentType[]>(DetailCommentAtom);
  const [commentId, setCommentId] = useState(-1);
  const [commentText, setCommentText] = useState("");
  const { data } = useGetRegistedPostById(id, {
    suspense: true,
  });

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentText.trim() === "") {
      return window.alert("댓글을 입력해주세요");
    }

    setComment((prev) => [...prev, { commentId, commentText }]);
    setCommentId(commentId + 1);
    setCommentText("");
    window.alert("댓글을 작성하였습니다.");
  };

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
          <S.DetailCommentForm onSubmit={hanldeSubmit}>
            <S.DetailItemCommentBox
              placeholder="댓글을 작성해주세요"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <S.DetailCommentButton type="submit">
              댓글 작성
            </S.DetailCommentButton>
          </S.DetailCommentForm>
          <S.DetailCommentUl>
            {comment.map((item) => (
              <li key={item.commentId}>
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png"
                    alt="이미지 없음"
                  />
                  <p style={{ fontSize: "17px" }}>{item.commentText}</p>
                </div>
              </li>
            ))}
          </S.DetailCommentUl>
        </S.DetailItemViewContainer>
      </S.DetailItemWrapper>
    </S.DetailItemContainer>
  );
}
