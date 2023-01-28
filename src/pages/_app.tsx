// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

// const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ToastContainer position='bottom-right' />
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );

  // return (
  //   // <QueryClientProvider client={queryClient}>
  //     <Component {...pageProps} />
  //     // <ReactQueryDevtools initialIsOpen={false} />
  //   {/* </QueryClientProvider> */}
  //  );
}

export default MyApp;
