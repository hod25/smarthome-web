import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Plans from '../components/plans';

const Home = () => {
  const t = useTranslations();

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      <Head>
        <title>{t('title')} | SmartHome</title>
        <meta name="description" content={t('subtitle')} />
        <link rel="icon" href="/circle.png" />
      </Head>
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("/kitchen.jpg")' }} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-blue-50">{t('title')}</h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-blue-100 drop-shadow">{t('subtitle')}</p>
          <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-2xl shadow-xl text-xl transition-all duration-200">
            {t('hero.cta')}
          </a>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section className="py-20 bg-white pb-0">
        <div className="container mx-auto">
          <Services />
        </div>
      </section>
      {/* PLANS SECTION */}
      <section className="py-20 pt-10 bg-gradient-to-b from-blue-50 to-white" id="plans">
        <div className="container mx-auto">
          <Plans />
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section className="py-20 bg-white" id="projects">
        <div className="container mx-auto">
          <Projects />
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-t from-blue-50 to-white" id="contact">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-blue-900 text-blue-100 py-8 text-center text-sm mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} SmartHome. כל הזכויות שמורות.</span>
          <span>עיצוב ופיתוח: SmartHome Team</span>
        </div>
      </footer>
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
