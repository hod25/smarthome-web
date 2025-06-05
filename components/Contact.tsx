import { useTranslations } from 'next-intl';

const Contact: React.FC = () => {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-8 bg-gray-100 rounded-xl shadow-inner">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">{t('title')}</h2>
        <p className="mb-8 text-gray-600 text-center text-lg">
          {t('desc') || 'נשמח לחזור אליך לייעוץ חינם, הצעת מחיר או כל שאלה!'}
        </p>
        <form
          className="space-y-5"
          action="https://formsubmit.co/hmitrany@gmail.com"
          method="POST"
          autoComplete="on"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://smarthome.co.il/thank-you" />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('phone') || 'טלפון'}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 text-right"
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
          <span className="inline-block order-2 md:order-3">📞 050-123-4567</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
