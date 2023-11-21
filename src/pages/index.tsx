import HomePage from "@/components/Home";
import { QUERY_KEYS } from "@/queries/queryKey";
import registRepositoryImpl from "@/repositories/Regist/regist.repositoryImpl";
import { QueryClient, dehydrate } from "react-query";

export default function Home() {
  return <HomePage />;
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(QUERY_KEYS.regist.getAllRegistedPost, () =>
    registRepositoryImpl.getAllRegistedPost()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
