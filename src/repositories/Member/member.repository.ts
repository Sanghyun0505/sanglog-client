import { MemberType } from "@/types/Member/member.type";

export interface MemberRepositoy {
  getMyInfo(id: number): Promise<MemberType | void>;
}
