import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations();
  return (
    <section id="faq-section" className="py-10 bg-white border-b border-blue-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">{t('faq.title') || 'שאלות נפוצות'}</h2>
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <details className="group border rounded-xl p-4 bg-blue-50" key={i}>
              <summary className="font-semibold text-blue-800 cursor-pointer flex items-center justify-between">
                {t(`faq.q${i}`)}
                <span className="ml-2 text-blue-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-2 text-gray-700 text-sm">{t(`faq.a${i}`)}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
