import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/libs/Token/token";
import { useToastAlert } from "./useToastAlert";

export const useLoggout = () => {
  const { toastAlert } = useToastAlert();
  const handleLoggout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      toastAlert("로그아웃 되셨습니다.", "info");
      token.removeCookie(ACCESS_TOKEN_KEY);
    }
  };

  return { handleLoggout };
};
