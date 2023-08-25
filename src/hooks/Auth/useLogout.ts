import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/libs/Token/token";

export const useLoggout = () => {
  const handleLoggout = () => {
    const answer = window.confirm("로그아웃하시겠습니까?");
    if (answer) {
      token.removeCookie(ACCESS_TOKEN_KEY);
      window.location.replace("/");
    }
  };

  return { handleLoggout };
};
