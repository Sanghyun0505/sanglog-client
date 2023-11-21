import Detail from "@/components/Detail";
import { QUERY_KEYS } from "@/queries/queryKey";
import registRepositoryImpl from "@/repositories/Regist/regist.repositoryImpl";
import { NextPage } from "next";
import { QueryClient, dehydrate } from "react-query";

const detail: NextPage = () => {
  return <Detail />;
};

detail.getInitialProps = async (ctx) => {
  const queryClient = new QueryClient();
  if (ctx.pathname) {
    await queryClient.prefetchQuery(
      QUERY_KEYS.regist.getRegistedPostById(Number(ctx.pathname)),
      () => registRepositoryImpl.getRegistedPostById(Number(ctx.pathname))
    );
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default detail;
