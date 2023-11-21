import { atom } from "recoil";

export const SideBarHideAtom = atom<boolean>({
  key: "hideSideBarAtom",
  default: false,
});

export const AuthSignInUpAtom = atom<boolean>({
  key: "authAtom",
  default: false,
});

export const SignInUpModalAtom = atom<"signIn" | "signUp">({
  key: "authModalAtom",
  default: "signIn",
});
