import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  const t = useTranslations();

  return (
    <div dir="rtl">
      <Head>
        <link rel="icon" href="/smarthome.png" />
      </Head>
      <Navbar />
      <main className="relative h-screen w-screen overflow-hidden">
        <LanguageSwitcher />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/kitchen.jpg")' }} />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg md:text-2xl mb-6">{t('subtitle')}</p>
          <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition">
            {t('hero.cta')}
          </a>
        </div>
      </main>
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const currentLocale = locale || 'he';
  return {
    props: {
      messages: (await import(`../locales/${currentLocale}.json`)).default,
      locale: currentLocale
    }
  };
}
