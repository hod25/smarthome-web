import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const Contact: React.FC<{ selectedPlan: string; setSelectedPlan: (plan: string) => void }> = ({ selectedPlan, setSelectedPlan }) => {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);

  // Ensure select field updates if selectedPlan changes from outside (e.g. from Plans)
  const [localPlan, setLocalPlan] = useState(selectedPlan);
  useEffect(() => {
    setLocalPlan(selectedPlan);
  }, [selectedPlan]);

  if (sent) {
    return (
      <section id="contact" className="py-8 bg-gray-100 rounded-xl shadow-inner">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">{t('title')}</h2>
          <p className="text-green-600 text-lg font-bold mt-8">{t('success') || 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.'}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 bg-gray-100 rounded-xl shadow-inner">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">{t('title')}</h2>
        <p className="mb-8 text-gray-600 text-center text-lg">
          {t('desc') || 'נשמח לחזור אליך לייעוץ חינם, הצעת מחיר או כל שאלה!'}
        </p>
        <form
          className="space-y-5"
          onSubmit={e => {
            e.preventDefault();
            setSent(true);
          }}
          autoComplete="on"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://smarthome.co.il/thank-you" />
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <select
              name="plan"
              id="plan"
              className="flex-1 w-full min-w-0 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
              value={localPlan}
              onChange={e => {
                setLocalPlan(e.target.value);
                setSelectedPlan(e.target.value);
              }}
              required={false}
            >
              {/* @ts-ignore */}
              <option value="">{t('choosePackage') || 'בחר חבילה (לא חובה)'}</option>
              {/* @ts-ignore */}
              <option value="basic">{t('plan_basic') || 'חבילת בסיס'}</option>
              {/* @ts-ignore */}
              <option value="standard">{t('plan_standard') || 'חבילת משפחה'}</option>
              {/* @ts-ignore */}
              <option value="premium">{t('plan_premium') || 'חבילת פרימיום'}</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              required
              className="flex-1 w-full min-w-0 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('phone') || 'טלפון'}
              required
              className="flex-1 w-full min-w-0 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t('email')}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
          />
          <textarea
            name="message"
            placeholder={t('message')}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-200"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow-lg font-bold text-lg transition"
          >
            {t('send')}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500 text-sm flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-4">
          <span className="inline-block order-1 md:order-1">✉️ info@smarthome.co.il</span>
          <span className="hidden md:inline-block order-2">|</span>
          <span className="inline-block order-2 md:order-3">📞 050-430-7411</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
