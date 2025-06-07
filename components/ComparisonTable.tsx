import { useTranslations } from 'next-intl';

const ComparisonTable = () => {
  const t = useTranslations();
  return (
    <section id="comparison-section" className="py-10 bg-gray-50 border-b border-blue-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">{t('comparison.title')}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-xl bg-white text-sm text-center">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4">{t('comparison.colFeature')}</th>
                <th className="py-2 px-4 text-blue-700">{t('comparison.colUs')}</th>
                <th className="py-2 px-4">{t('comparison.colCompetitors')}</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7,8].map(i => (
                <tr className="border-t" key={i}>
                  <td className="py-2 px-4">{t(`comparison.feature${i}`) || `comparison.feature${i}`}</td>
                  <td className="py-2 px-4 text-green-600 font-bold text-2xl">✔<div className="sr-only">{t(`comparison.ha${i}`)}</div></td>
                  <td className="py-2 px-4 text-red-500 font-bold text-2xl">✖<div className="sr-only">{t(`comparison.comp${i}`)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
