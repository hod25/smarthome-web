import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const locale = pageProps.locale || 'he';
  return (
    <IntlProvider messages={pageProps.messages} locale={locale}>
      <Component {...pageProps} locale={locale} />
    </IntlProvider>
  );
}
