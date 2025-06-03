import { useTranslations } from 'next-intl';
import { LightBulbIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const iconClasses = "w-12 h-12 mx-auto mb-4 text-blue-500";

const Services: React.FC = () => {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <LightBulbIcon className={iconClasses} />
            <h3 className="text-2xl font-semibold mb-4">{t('lighting.title')}</h3>
            <p>{t('lighting.desc')}</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <CloudIcon className={iconClasses} />
            <h3 className="text-2xl font-semibold mb-4">{t('climate.title')}</h3>
            <p>{t('climate.desc')}</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
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
