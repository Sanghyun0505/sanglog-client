import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/libs/Token/token";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";

export default function HomeRegistButton() {
  const router = useRouter();
  return (
    <>
      {token.getCookie(ACCESS_TOKEN_KEY) && (
        <RegistButton onClick={() => router.push("/regist")}>
          <FaPencilAlt size={25} color="#fff" />
        </RegistButton>
      )}
    </>
  );
}

const RegistButton = styled.button`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  border-radius: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #5fd9cd;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
