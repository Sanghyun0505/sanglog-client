import { QUERY_KEYS } from "@/queries/queryKey";
import {
  useDeleteRegistedPostMutation,
  useRegistPostMutation,
} from "@/queries/Regist/regist.query";
import { RegistParam } from "@/types/regist/regist.type";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useToastAlert } from "../common/useToastAlert";

export const useWrite = () => {
  const router = useRouter();
  const [textHtml, setTextHtml] = useState("");
  const [credentials, setCredentials] = useState<RegistParam>({
    title: "",
    subtitle: "",
    image: "",
  });
  const registPost = useRegistPostMutation();
  const deletePost = useDeleteRegistedPostMutation();
  const { toastAlert } = useToastAlert();
  const QueryClient = useQueryClient();

  const handleGoOutClick = () => {
    const answer = window.confirm("글쓰기 페이지를 나가시겠습니까?");
    if (answer) {
      router.push("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.preventDefault();
    const answer = window.confirm("글을 삭제하시겠습니까?");
    if (answer) {
      deletePost.mutate(id, {
        onSuccess: () => {
          toastAlert("게시글을 삭제하셨습니다.", "success");
          QueryClient.invalidateQueries(QUERY_KEYS.regist.getAllRegistedPost);
        },
        onError: () => {
          toastAlert("게시글을 삭제하지 못했습니다.", "error");
        },
      });
    }
  };

  const handleRegistClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const answer = window.confirm("글을 등록하시겠습니까?");
    if (answer) {
      if (credentials.title.trim() === "") {
        return window.alert("제목을 입력해주세요!");
      }

      if (textHtml.trim() === "") {
        return window.alert("글을 입력해주세요!");
      }

      const registData = Object.assign(credentials, { content: textHtml });
      registPost.mutateAsync(registData, {
        onSuccess: () => {
          toastAlert("글을 등록하였습니다.", "success");
          setTextHtml("");
          QueryClient.invalidateQueries(QUERY_KEYS.regist.getAllRegistedPost);
          router.push("/");
        },
        onError: (e) => {
          toastAlert("글을 등록하지 못했습니다.", "error");
          console.log(e);
        },
      });
    }
  };

  return {
    handleGoOutClick,
    handleRegistClick,
    handleDeleteClick,
    handleChange,
    setTextHtml,
    ...credentials,
  };
};
