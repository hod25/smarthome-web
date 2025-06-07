import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="py-10 bg-white border-b border-blue-100">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{t('aboutTitle') || 'אודות MySmartHome'}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t('aboutText') || 'MySmartHome מתמחה בפתרונות בית חכם מתקדמים, עם דגש על שירות אישי, מקצועיות, ואמינות. אנו מלווים את לקוחותינו משלב הייעוץ ועד ההתקנה והתמיכה, ומתחייבים להתאמה מלאה לצרכים שלכם. עם ניסיון של שנים בתחום, אנו מביאים חדשנות, שקיפות, ושקט נפשי לכל בית ועסק.'}
        </p>
      </div>
    </section>
  );
};

export default About;
