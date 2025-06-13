import { useTranslations } from 'next-intl';
import { LightBulbIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const iconClasses = "w-12 h-12 mx-auto mb-4 text-blue-500";

const Services: React.FC = () => {
  const t = useTranslations('services');
  const { locale } = useRouter();
  const isRtl = locale === 'he';

  // הגדרת מערך הכרטיסים
  const cards = [
    {
      icon: <LightBulbIcon className={iconClasses} />, title: t('lighting.title'), desc: t('lighting.desc')
    },
    {
      icon: <CloudIcon className={iconClasses} />, title: t('climate.title'), desc: t('climate.desc')
    },
    {
      icon: <ShieldCheckIcon className={iconClasses} />, title: t('security.title'), desc: t('security.desc')
    },
  ];
  const cardsToShow = isRtl ? cards : [...cards].reverse();

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">{t('title')}</h2>
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x md:snap-none pb-4">
          {cardsToShow.map((card, idx) => (
            <div key={idx} className="bg-white p-6 shadow-lg rounded-lg min-w-[80vw] max-w-xs mx-2 snap-center md:min-w-0 md:max-w-none">
              {card.icon}
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
