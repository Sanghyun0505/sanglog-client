import { CommentType } from "@/types/detail/detail.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const DetailCommentAtom = atom<CommentType[]>({
  key: "detailCommentAtom",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});
