import HomePage from "@/components/Home";
import { QUERY_KEYS } from "@/queries/queryKey";
import registRepositoryImpl from "@/repositories/Regist/regist.repositoryImpl";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";

export default function Home() {
  return (
    <>
      <Head>
        <title>sanglog</title>
        <link
          rel="shortcut icon"
          href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f002d357.png&w=1200&q=75"
        />
      </Head>
      <HomePage />
    </>
  );
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
