import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideSideBarAtom } from "@/stores/common/common.store";

export const useHideSideBar = () => {
  const setHideSideBar = useSetRecoilState(HideSideBarAtom);
  useEffect(() => {
    setHideSideBar(true);
    return () => setHideSideBar(false);
  }, [setHideSideBar]);
};
