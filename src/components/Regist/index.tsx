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
import { useRegist } from "@/hooks/Regist/useRegist";
import { useHideSideBar } from "@/hooks/common/useHideSideBar";
import Header from "../common/Header";
import { registToolBarItems } from "@/constants/Regist/regist.constant";

export default function Regist() {
  const editorRef = useRef<Editor>(null);
  const {
    handleGoOutClick,
    handleRegistClick,
    handleTitleChange,
    setTextMarkdown,
    title,
    subtitle,
    image,
  } = useRegist();
  useHideSideBar();
  return (
    <S.RegistContainer>
      <S.RegistTitleInputBar
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={handleTitleChange}
        name="title"
        fontSize="50px"
      />
      <S.RegistTitleInputBar
        type="text"
        placeholder="부제목을 입력해주세요"
        value={subtitle}
        onChange={handleTitleChange}
        name="subtitle"
        fontSize="25px"
      />
      <Editor
        ref={editorRef}
        onChange={() =>
          setTextMarkdown(editorRef.current?.getInstance().getHTML())
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
        <S.RegistOutContainer onClick={handleGoOutClick}>
          <BsArrowLeft size={30} />
          <p>나가기</p>
        </S.RegistOutContainer>
        <S.RegistSubmitBtn onClick={handleRegistClick}>
          제출하기
        </S.RegistSubmitBtn>
      </S.RegistSubmitContainer>
    </S.RegistContainer>
  );
}
