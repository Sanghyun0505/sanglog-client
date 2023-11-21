import { MemberType } from "@/types/Member/member.type";
import { MemberRepositoy } from "./member.repository";
import { customAxios } from "@/libs/Axios/customAxios";

class MemberRepositoryImpl implements MemberRepositoy {
  public async getMyInfo(id: number): Promise<MemberType | void> {
    if (id) {
      const { data } = await customAxios.get(`/member/${id}`);
      return data;
    }
  }
}

export default new MemberRepositoryImpl();
