import { customAxios } from "@/libs/Axios/customAxios";
import {
  RegistPostParam,
  RegistUpdateParam,
  RegistRepository,
} from "./regist.reposiory";
import { RegistResponse } from "@/types/regist/regist.type";

class RegistRepositoryImpl implements RegistRepository {
  public async registPost(param: RegistPostParam): Promise<void> {
    await customAxios.post("/regist", param);
  }

  public async getAllRegistedPost(): Promise<RegistResponse[]> {
    const { data } = await customAxios.get("/regist/all");
    return data;
  }

  public async getRegistedPostById(id: number): Promise<RegistResponse> {
    const { data } = await customAxios.get(`/regist/${id}`);
    return data;
  }

  public async patchRegistedPost(updateData: RegistUpdateParam): Promise<void> {
    await customAxios.patch(`/regist/${updateData.id}`, {
      title: updateData.title,
      content: updateData.content,
    });
  }

  public async deleteRegistedPost(id: number): Promise<void> {
    await customAxios.delete(`/regist/${id}`);
  }
}

export default new RegistRepositoryImpl();
