import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../Auth/auth.constant";

interface Type {
  id: number;
  title: string;
  link?: string;
}

export const SIDEBAR_ITEMS: Type[] = [
  {
    id: 1,
    title: "홈",
    link: "/",
  },
  {
    id: 2,
    title: token.getCookie(ACCESS_TOKEN_KEY) ? "새 글 작성" : "로그인",
    link: "/regist",
  },
];
