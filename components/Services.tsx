import { useTranslations } from 'next-intl';
import { LightBulbIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const iconClasses = "w-12 h-12 mx-auto mb-4 text-blue-500";

const Services: React.FC = () => {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">{t('title')}</h2>
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x md:snap-none pb-4">
          <div className="bg-white p-6 shadow-lg rounded-lg min-w-[80vw] max-w-xs mx-2 snap-center md:min-w-0 md:max-w-none">
            <LightBulbIcon className={iconClasses} />
            <h3 className="text-2xl font-semibold mb-4">{t('lighting.title')}</h3>
            <p>{t('lighting.desc')}</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg min-w-[80vw] max-w-xs mx-2 snap-center md:min-w-0 md:max-w-none">
            <CloudIcon className={iconClasses} />
            <h3 className="text-2xl font-semibold mb-4">{t('climate.title')}</h3>
            <p>{t('climate.desc')}</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg min-w-[80vw] max-w-xs mx-2 snap-center md:min-w-0 md:max-w-none">
            <ShieldCheckIcon className={iconClasses} />
            <h3 className="text-2xl font-semibold mb-4">{t('security.title')}</h3>
            <p>{t('security.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
