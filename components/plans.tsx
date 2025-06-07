import { useTranslations } from 'next-intl';
import type { FC } from 'react';

interface Plan {
  key: string;
  color: string;
  title: string;
  price: string;
  features: string[];
}

const Plans: FC = () => {
  const t = useTranslations('plans');

  const plans: Plan[] = [
    {
      key: 'basic',
      color: 'border-green-500',
      title: t('basic.title'),
      price: t('basic.price'),
      features: [
        t('basic.features.0'),
        t('basic.features.1'),
        t('basic.features.2'),
        t('basic.features.3'),
        t('basic.features.4'),
        t('basic.features.5'),
      ],
    },
    {
      key: 'standard',
      color: 'border-yellow-500',
      title: t('standard.title'),
      price: t('standard.price'),
      features: [
        t('standard.features.0'),
        t('standard.features.1'),
        t('standard.features.2'),
        t('standard.features.3'),
        t('standard.features.4'),
        t('standard.features.5'),
        t('standard.features.6'),
      ],
    },
    {
      key: 'premium',
      color: 'border-blue-500',
      title: t('premium.title'),
      price: t('premium.price'),
      features: [
        t('premium.features.0'),
        t('premium.features.1'),
        t('premium.features.2'),
        t('premium.features.3'),
        t('premium.features.4'),
        t('premium.features.5'),
        t('premium.features.6'),
        t('premium.features.7'),
      ],
    },
  ];

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">{t('title')}</h2>
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x md:snap-none pb-4">
          {plans.map((plan, i) => (
            <div
              key={plan.key}
              className={`relative border-4 ${plan.color} bg-white p-8 shadow-2xl rounded-2xl text-left flex flex-col items-stretch transition-transform hover:scale-105 hover:shadow-blue-200 duration-200 min-w-[80vw] max-w-xs mx-2 snap-center md:min-w-0 md:max-w-none ${i === 1 ? 'md:scale-105 md:shadow-lg md:border-8 md:z-10' : ''}`}
              style={{ height: '100%' }}
            >
              {/* Decorative badge for the most popular plan */}
              {i === 1 && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full shadow text-xs tracking-wide border border-yellow-300 z-0 md:z-0">
                  הכי פופולרי
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-blue-700 text-center">{plan.title}</h3>
              <p className="text-3xl text-blue-900 font-extrabold mb-4 text-center">{plan.price}</p>
              <ul className="list-disc ltr:pl-5 rtl:pr-5 rtl:text-right ltr:text-left space-y-2 text-gray-700 text-base min-h-[120px] flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
              <div className="flex-grow" />
              <button
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition text-lg w-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.getElementById('contact')?.getBoundingClientRect().top! + window.scrollY - 80,
                    behavior: 'smooth',
                  });
                  setTimeout(() => {
                    const nameInput = document.querySelector('#contact input[name="name"]') as HTMLInputElement;
                    if (nameInput) nameInput.focus();
                  }, 700);
                }}
                aria-label={t('choose')}
              >
                {t('choose')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
