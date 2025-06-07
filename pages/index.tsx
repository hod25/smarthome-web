import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Plans from '../components/plans';
import Testimonials from '../components/Testimonials';
import ComparisonTable from '../components/ComparisonTable';
import FAQ from '../components/FAQ';
import { useEffect } from 'react';
import About from '../components/About';

const Home = ({ locale }: { locale?: string }) => {
  const t = useTranslations();
  // Detect locale by IP (browser) if not set
  useEffect(() => {
    if (!locale && typeof window !== 'undefined') {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country_code === 'IL') {
            // בישראל תמיד עברית, לא מפנה ל-/he אלא טוען עברית ב-root
            if (window.location.pathname === '/' || window.location.pathname === '') {
              // כבר ב-root, לא צריך הפניה
              return;
            }
          } else if (data && data.country_code === 'DE') {
            if (!window.location.pathname.startsWith('/de')) {
              window.location.href = '/de';
            }
          } else {
            if (!window.location.pathname.startsWith('/en')) {
              window.location.href = '/en';
            }
          }
        });
    }
  }, [locale]);

  // בישראל תמיד עברית ב-root
  const currentLocale = (typeof window !== 'undefined' && window.location.pathname.startsWith('/en')) ? 'en'
    : (typeof window !== 'undefined' && window.location.pathname.startsWith('/de')) ? 'de'
    : 'he';
  const dir = currentLocale === 'he' ? 'rtl' : 'ltr';
  const whatsappMessage = encodeURIComponent(t('whatsappMessage'));
  const whatsappLink = `https://wa.me/972504307411?text=${whatsappMessage}`;

  return (
    <div dir={dir} className={`bg-gray-50 min-h-screen ${dir === 'ltr' ? 'text-left' : 'text-right'}`}>
      <Head>
        {currentLocale === 'he' ? (
          <>
            <title>הבית החכם שלך | MySmartHome</title>
            <meta name="description" content="התקנת מערכות בית חכם, שליטה קולית, חשמל חכם, התקנה מקצועית בפריסה ארצית. שליטה מהנייד, אבטחה ונוחות לבית ולעסק." />
            <meta name="keywords" content="בית חכם, שליטה קולית, חשמל חכם, אוטומציה, אבטחה, שליטה מהנייד, תאורה חכמה, התקנה מקצועית" />
            <meta property="og:title" content="הבית החכם שלך | MySmartHome" />
            <meta property="og:description" content="התקנת מערכות בית חכם, שליטה קולית, חשמל חכם, התקנה מקצועית בפריסה ארצית. שליטה מהנייד, אבטחה ונוחות לבית ולעסק." />
            <meta property="og:image" content="/circle.png" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="he_IL" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="הבית החכם שלך | MySmartHome" />
            <meta name="twitter:description" content="התקנת מערכות בית חכם, שליטה קולית, חשמל חכם, התקנה מקצועית בפריסה ארצית." />
            <meta name="twitter:image" content="/circle.png" />
            <link rel="alternate" hrefLang="he" href="https://smarthome.7112000.xyz/" />
            <link rel="alternate" hrefLang="en" href="https://smarthome.7112000.xyz/en" />
          </>
        ) : (
          <>
            <title>MySmartHome</title>
            <meta name="description" content="Installation of smart home systems, voice control, Home Assistant, smart electricity, professional installation nationwide. Mobile control, security, and convenience for home and business." />
            <meta name="keywords" content="smart home, Home Assistant, voice control, smart electricity, automation, security, mobile control, smart lighting, professional installation" />
            <meta property="og:title" content="Smart Home in Jerusalem | Voice Control, Smart Electricity | MySmartHome" />
            <meta property="og:description" content="Installation of smart home systems, voice control, Home Assistant, smart electricity, professional installation nationwide. Mobile control, security, and convenience for home and business." />
            <meta property="og:image" content="/circle.png" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Smart Home in Jerusalem | Voice Control, Smart Electricity | MySmartHome" />
            <meta name="twitter:description" content="Installation of smart home systems, voice control, smart electricity, professional installation nationwide." />
            <meta name="twitter:image" content="/circle.png" />
            <link rel="alternate" hrefLang="he" href="https://smarthome.7112000.xyz/" />
            <link rel="alternate" hrefLang="en" href="https://smarthome.7112000.xyz/en" />
          </>
        )}
        <link rel="icon" href="/circle.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/circle.png" />
        <link rel="shortcut icon" href="/circle.png" />
      </Head>
      <Navbar/>
      {/* <Testimonials /> */}
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("/kitchen.jpg")' }} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-blue-50">{t('title')}</h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-blue-100 drop-shadow">{t('subtitle')}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-2xl shadow-xl text-xl transition-all duration-200"
          >
            {t('sendViaWhatsapp') || 'שלח בוואטסאפ'}
          </a>
        </div>
      </section>
      {/* SERVICES SECTION */}
        <div className="container mx-auto">
          <Services />
        </div>
      {/* PLANS SECTION */}
        <div className="container mx-auto">
          <Plans />
        </div>
      {/* PROJECTS SECTION */}
      {/* <section className="py-20 bg-white" id="projects">
        <div className="container mx-auto">
          <Projects />
        </div>
      </section> */}
      {/* CONTACT SECTION */}
        <div className="container mx-auto">
          <Contact />
        </div>
      {/* <FAQ /> */}
      {/* אזור השוואה מול מתחרים */}
      {/* <ComparisonTable /> */}
      {/* אודות החברה */}
      <About />
      {/* FOOTER */}
      <footer className="bg-blue-900 text-blue-100 py-1 text-center text-sm mt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} SmartHome. כל הזכויות שמורות.</span>
          <span>עיצוב ופיתוח: SmartHome Team</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  // ברירת מחדל תמיד עברית, אבל אם יש locale (למשל /en או /de) נטען את השפה המתאימה
  const supportedLocales = ['he', 'en', 'de'];
  const currentLocale = supportedLocales.includes(locale ?? '') ? locale : 'he';
  return {
    props: {
      messages: (await import(`../locales/${currentLocale}.json`)).default,
      locale: currentLocale
    }
  };
}
