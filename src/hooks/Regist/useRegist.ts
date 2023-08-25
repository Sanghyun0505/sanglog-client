import { QUERY_KEYS } from "@/queries/queryKey";
import { useRegistPostMutation } from "@/queries/Regist/regist.query";
import { RegistParam } from "@/types/regist/regist.type";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";

export const useRegist = () => {
  const router = useRouter();
  const [textMarkdown, setTextMarkdown] = useState("");
  const [credentials, setCredentials] = useState<RegistParam>({
    title: "",
    subtitle: "",
    image: "",
  });
  const registPost = useRegistPostMutation();
  const QueryClient = useQueryClient();

  const handleGoOutClick = () => {
    const answer = window.confirm("글쓰기 페이지를 나가시겠습니까?");
    if (answer) {
      router.push("/");
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleRegistClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const answer = window.confirm("글을 등록하시겠습니까?");
    if (answer) {
      if (credentials.title.trim() === "") {
        return window.alert("제목을 입력해주세요!");
      }

      if (textMarkdown.trim() === "") {
        return window.alert("글을 입력해주세요!");
      }
      console.log(textMarkdown);

      const registData = Object.assign(credentials, { content: textMarkdown });
      console.log(registData);
      registPost.mutateAsync(registData, {
        onSuccess: () => {
          window.alert("글을 등록하였습니다.");
          setTextMarkdown("");
          QueryClient.invalidateQueries(QUERY_KEYS.regist.getAllRegistedPost);
          router.push("/");
        },
        onError: (e) => {
          window.alert("글을 등록하지 못했습니다.");
          console.log(e);
        },
      });
    }
  };

  return {
    handleGoOutClick,
    handleRegistClick,
    handleTitleChange,
    setTextMarkdown,
    ...credentials,
  };
};
