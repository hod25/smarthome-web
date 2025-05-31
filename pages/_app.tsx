import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider messages={pageProps.messages} locale={pageProps.locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
