import { useEffect } from "react";
import { useRouter } from "next/router";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { useToasts } from "react-toast-notifications";
import { useToastAlert } from "../common/useToastAlert";

const useTokenCheck = () => {
  const router = useRouter();
  const { toastAlert } = useToastAlert();
  useEffect(() => {
    const checkTokens = () => {
      if (!token.getCookie(ACCESS_TOKEN_KEY)) {
        toastAlert("로그인이 필요한 서비스입니다.", "error");
        router.push("/");
      }
    };
    checkTokens();
  }, []);
};

export default useTokenCheck;
