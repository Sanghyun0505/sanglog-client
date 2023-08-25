import * as S from "./style";
import HomeItem from "./HomeItem";
import ErrorBoundary from "../common/ErrorBoundary";
import { Suspense } from "react";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <ErrorBoundary fallback={<>Error :)</>}>
          <Suspense fallback={<>Loading...</>}>
            <HomeItem />
          </Suspense>
        </ErrorBoundary>
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
