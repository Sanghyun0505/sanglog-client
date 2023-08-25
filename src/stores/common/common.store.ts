import { atom } from "recoil";

export const HideSideBarAtom = atom<boolean>({
  key: "hideSideBarAtom",
  default: false,
});

export const AuthAtom = atom<boolean>({
  key: "authAtom",
  default: false,
});
