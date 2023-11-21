import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import memberRepositroyImpl from "@/repositories/Member/member.repositroyImpl";

export const useGetMyInfo = (id: number) =>
  useQuery(
    QUERY_KEYS.member.getMyInfo(id),
    () => memberRepositroyImpl.getMyInfo(id),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
