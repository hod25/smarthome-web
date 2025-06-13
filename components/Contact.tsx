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
              {/* Name field with floating label */}
              <div className="relative flex-1 w-full min-w-0 text-right">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" "
                  required
                  className="peer w-full min-w-0 pt-4 pb-3 pr-3 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-transparent text-right"
                />
                <label
                  htmlFor="name"
                  className="absolute right-3 top-2 text-gray-500 text-sm transition-all
                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500
                            peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  {t('name') || 'שם מלא'}<span className="text-red-500">*</span>
                </label>
              </div>
              {/* Phone field with floating label */}
              <div className="relative flex-1 w-full min-w-0 text-right">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=" "
                  required
                  className="peer w-full min-w-0 pt-4 pb-3 pr-3 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-transparent text-right"
                />
                <label
                  htmlFor="phone"
                  className="absolute right-3 top-2 text-gray-500 text-sm transition-all
                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500
                            peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  {t('phone') || 'טלפון'}<span className="text-red-500">*</span>
                </label>
              </div>
              {/* Plan select remains unchanged */}
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
                <option value="">{t('choosePackage')}</option>
                {/* @ts-ignore */}
                <option value="basic">{t('plan_basic')}</option>
                {/* @ts-ignore */}
                <option value="standard">{t('plan_standard')}</option>
                {/* @ts-ignore */}
                <option value="premium">{t('plan_premium')}</option>
              </select>
            </div>
            {/* Email field with floating label */}
            <div className="relative w-full text-right">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                className="peer w-full pt-4 pb-3 pr-3 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-transparent text-right"
              />
              <label
                htmlFor="email"
                className="absolute right-3 top-2 text-gray-500 text-sm transition-all
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                          peer-placeholder-shown:text-gray-400
                          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500
                          peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm"
              >
                {t('email') || 'אימייל'}
              </label>
            </div>
            {/* Message field with floating label */}
            <div className="relative w-full text-right">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                className="peer w-full pt-4 pb-3 pr-3 pl-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-transparent text-right resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute right-3 top-2 text-gray-500 text-sm transition-all
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                          peer-placeholder-shown:text-gray-400
                          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500
                          peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm"
              >
                {t('message') || 'הודעה'}
              </label>
            </div>
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
