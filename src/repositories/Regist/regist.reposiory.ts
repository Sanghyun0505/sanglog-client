import { RegistResponse } from "@/types/regist/regist.type";

export interface RegistRepository {
  registPost(param: RegistPostParam): Promise<void>;
  getAllRegistedPost(): Promise<RegistResponse[]>;
  getRegistedPostById(id: number): Promise<RegistResponse>;
  patchRegistedPost(updateData: RegistUpdateParam): Promise<void>;
  deleteRegistedPost(id: number): Promise<void>;
}

export interface RegistPostParam {
  title: string;
  content: string;
}

export interface RegistUpdateParam {
  id: number;
  title?: string;
  content?: string;
}
