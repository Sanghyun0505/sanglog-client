import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../Auth/auth.constant";
import { SidBarItems } from "@/types/Sidebar/sidebar.type";

export const SIDEBAR_ITEMS: SidBarItems[] = [
  {
    id: 1,
    title: "홈",
    link: "/",
  },
  {
    id: 2,
    title: token.getCookie(ACCESS_TOKEN_KEY) ? "로그아웃" : "로그인",
  },
];
