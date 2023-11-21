import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/libs/Token/token";
import { DecodeKeyType, DecodeType } from "@/types/Auth/auth.type";
import jwtDecode from "jwt-decode";

export const tokenDecode = (option: DecodeKeyType) => {
  const accessToken = token.getCookie(ACCESS_TOKEN_KEY);
  if (accessToken) {
    return jwtDecode<DecodeType>(accessToken)[option];
  }
  return;
};
