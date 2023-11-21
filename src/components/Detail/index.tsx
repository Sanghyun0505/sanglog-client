import { useRouter } from "next/router";
import "@toast-ui/editor/dist/toastui-editor.css";
import ErrorBoundary from "../common/ErrorBoundary";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useHideSideBar } from "@/hooks/common/useHideSideBar";
import styled from "styled-components";

const DetailItem = dynamic(() => import("./DetialItem"), {
  ssr: false,
});

export default function Detail() {
  useHideSideBar();
  const router = useRouter();
  return (
    <DetailContainer>
      <ErrorBoundary fallback={<>Error:)</>}>
        <Suspense fallback={<>Loading</>}>
          <DetailItem id={Number(router.query.id)} />
        </Suspense>
      </ErrorBoundary>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
  background-color: #fff;
`;
