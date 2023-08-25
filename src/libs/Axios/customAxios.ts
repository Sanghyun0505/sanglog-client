import axios from "axios";
import CONFIG from "@/config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/auth.constant";
import token from "../Token/token";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});
