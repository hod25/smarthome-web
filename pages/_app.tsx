import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // עברית כברירת מחדל, אך מאפשר החלפת שפה לפי pageProps.locale
  const locale = pageProps.locale || 'he';
  return (
    <IntlProvider messages={pageProps.messages} locale={locale} timeZone="Asia/Jerusalem">
      <Component {...pageProps} locale={locale} />
    </IntlProvider>
  );
}
