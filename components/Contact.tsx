import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const Contact: React.FC<{ selectedPlan: string; setSelectedPlan: (plan: string) => void }> = ({ selectedPlan, setSelectedPlan }) => {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
      <div className="max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-xl transition-all duration-300 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-1 text-blue-700 text-center">{t('formTitle')}</h2>
        <p className="mb-4 text-gray-600 text-center text-base">{t('formSubtitle')}</p>
        <button
          className={`mx-auto flex items-center justify-center rounded-full font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition mb-2 shadow-lg`}
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
          aria-controls="contact-collapse"
          style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px', padding: 0 }}
        >
          <svg className={`w-7 h-7 m-0 transform transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        <div
          id="contact-collapse"
          className={`w-full overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[2000px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
          style={{
            willChange: 'max-height, opacity',
          }}
        >
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
              className="w-56 max-w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow-lg font-bold text-lg transition mx-auto block"
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
      </div>
    </section>
  );
};

export default Contact;
