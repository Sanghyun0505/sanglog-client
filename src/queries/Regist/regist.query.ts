import {
  RegistPostParam,
  RegistUpdateParam,
} from "@/repositories/Regist/regist.reposiory";
import registRepositoryImpl from "@/repositories/Regist/regist.repositoryImpl";
import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import { QUERY_KEYS } from "../queryKey";
import { AxiosError } from "axios";
import { RegistResponse } from "@/types/regist/regist.type";

export const useRegistPostMutation = () => {
  const mutate = useMutation((param: RegistPostParam) =>
    registRepositoryImpl.registPost(param)
  );
  return mutate;
};

export const useGetAllRegistedPostQuery = (
  options?: UseQueryOptions<
    RegistResponse[],
    AxiosError,
    RegistResponse[],
    string
  >
): UseQueryResult<RegistResponse[], AxiosError> =>
  useQuery(
    QUERY_KEYS.regist.getAllRegistedPost,
    () => registRepositoryImpl.getAllRegistedPost(),
    {
      ...options,
    }
  );

export const useGetRegistedPostById = (
  id: number,
  options?: UseQueryOptions<
    RegistResponse,
    AxiosError,
    RegistResponse,
    string[]
  >
): UseQueryResult<RegistResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.regist.getRegistedPostById(id),
    () => registRepositoryImpl.getRegistedPostById(id),
    {
      enabled: !!id,
      ...options,
    }
  );

export const usePatchRegistedPostMutation = () => {
  const mutate = useMutation((updateData: RegistUpdateParam) =>
    registRepositoryImpl.patchRegistedPost(updateData)
  );
  return mutate;
};

export const useDeleteRegistedPostMutation = () => {
  const mutate = useMutation((id: number) =>
    registRepositoryImpl.deleteRegistedPost(id)
  );
  return mutate;
};
