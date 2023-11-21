import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef } from "react";
import * as S from "./style";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { useHideSideBar } from "@/hooks/common/useHideSideBar";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useWrite } from "@/hooks/Write/useWrite";
import { registToolBarItems } from "@/constants/Regist/regist.constant";
import useRoleCheck from "@/hooks/Auth/useRoleCheck";

export default function Regist() {
  const editorRef = useRef<Editor>(null);
  const { ...attr } = useWrite();
  useHideSideBar();
  useTokenCheck();
  useRoleCheck();

  return (
    <S.RegistContainer>
      <S.RegistTitleInputBar
        type="text"
        placeholder="제목을 입력해주세요"
        value={attr.title}
        onChange={attr.handleChange}
        name="title"
        fontSize="50px"
        autoComplete="off"
      />
      <S.RegistTitleInputBar
        type="text"
        placeholder="부제목을 입력해주세요"
        value={attr.subtitle}
        onChange={attr.handleChange}
        name="subtitle"
        fontSize="25px"
        autoComplete="off"
      />
      <S.ImageInputBar
        type="text"
        placeholder="이미지의 링크를 입력해주세요"
        value={attr.image}
        onChange={attr.handleChange}
        name="image"
        autoComplete="off"
      />
      <Editor
        ref={editorRef}
        onChange={() =>
          attr.setTextHtml(editorRef.current?.getInstance().getHTML())
        }
        previewStyle="vertical"
        initalValue="글을 작성해 주세요"
        placeholder="글을 작성해 주세요"
        initialEditType="markdown"
        height="90%"
        toolbarItems={registToolBarItems}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        language="ko-KR"
        useCommandShortcut={false}
      />
      <S.RegistSubmitContainer>
        <S.RegistOutContainer onClick={attr.handleGoOutClick}>
          <BsArrowLeft size={30} />
          <p>나가기</p>
        </S.RegistOutContainer>
        <S.RegistSubmitBtn onClick={attr.handleRegistClick}>
          제출하기
        </S.RegistSubmitBtn>
      </S.RegistSubmitContainer>
    </S.RegistContainer>
  );
}
