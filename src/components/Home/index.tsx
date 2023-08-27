import * as S from "./style";
import HomeItem from "./HomeItem";
import ErrorBoundary from "../common/ErrorBoundary";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const HomeRegistButton = dynamic(() => import("./HomeRegistButton"), {
  ssr: false,
});

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <ErrorBoundary fallback={<>Error :)</>}>
          <Suspense fallback={<>Loading...</>}>
            <HomeItem />
          </Suspense>
        </ErrorBoundary>
        <HomeRegistButton />
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
