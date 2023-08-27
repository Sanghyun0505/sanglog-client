import { atom } from "recoil";

export const SideBarHideAtom = atom<boolean>({
  key: "hideSideBarAtom",
  default: false,
});

export const AuthSignInUpAtom = atom<boolean>({
  key: "authAtom",
  default: false,
});
