import PageTemplate from "@/components/common/PageTemplate";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ToastProvider>
            <PageTemplate>
              <Component {...pageProps} />
            </PageTemplate>
          </ToastProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
