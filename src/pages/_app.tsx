import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { apolloClient } from '@/lib/apollo-client';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;