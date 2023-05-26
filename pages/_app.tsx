import Layout from "@src/components/Layout";
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration' //서버 사이드 렌더링 관련 컴포넌트
import "@assets/styles/common.css";
import "@assets/styles/reset.css";
import '@src/scss/index.scss'
import "../node_modules/slick-carousel/slick/slick.css";
import { ReactQueryDevtools } from 'react-query/devtools'
import { getClient } from "@src/assets/ts/queryClient";


if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
 
  
  console.warn = () => {};
 
  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp
