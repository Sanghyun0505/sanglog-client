import PageTemplate from "@/components/common/PageTemplate";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

function App({ Component, pageProps }: AppProps) {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: 1000 * 60 * 60,
        cacheTime: 1000 * 60 * 60,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastProvider>
          <PageTemplate>
            <Component {...pageProps} />
          </PageTemplate>
        </ToastProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
