import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { SideBarHideAtom } from "@/stores/common/common.store";

export const useHideSideBar = () => {
  const setHideSideBar = useSetRecoilState(SideBarHideAtom);
  useEffect(() => {
    setHideSideBar(true);
    return () => setHideSideBar(false);
  }, [setHideSideBar]);
};
