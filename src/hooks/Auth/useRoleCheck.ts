import { useEffect } from "react";
import { useRouter } from "next/router";
import { useToastAlert } from "../common/useToastAlert";
import { tokenDecode } from "@/utils/Auth/tokenDecode";

const useRoleCheck = () => {
  const router = useRouter();
  const { toastAlert } = useToastAlert();
  useEffect(() => {
    const checkRole = () => {
      if (tokenDecode("role") !== "ADMIN") {
        toastAlert("글 등록 권한이 없습니다!", "error");
        router.push("/");
      }
    };
    checkRole();
  }, []);
};

export default useRoleCheck;
