import { useTranslations } from 'next-intl';

const Testimonials = () => {
  const t = useTranslations();
  // המלצות לפי שפה
  const testimonials = [
    {
      name: t('testimonial1Name') || 'אורן, ירושלים',
      text: t('testimonial1Text') || 'התקנה מקצועית, שירות מהיר ומענה לכל שאלה. הבית שלי חכם באמת!'
    },
    {
      name: t('testimonial2Name') || 'דנה, מודיעין',
      text: t('testimonial2Text') || 'המערכת פשוטה לתפעול, הילדים מתלהבים מהשליטה הקולית! ממליצה בחום.'
    },
    {
      name: t('testimonial3Name') || 'משה, תל אביב',
      text: t('testimonial3Text') || 'החיים שלי נהיו הרבה יותר נוחים. תודה על הליווי וההסברים!'
    }
  ];
  return (
    <section id="testimonials-section" className="py-8 bg-white border-b border-blue-100">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{t('testimonialsTitle') || 'לקוחות ממליצים'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x md:snap-none">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl p-4 shadow text-right min-w-[80vw] max-w-xs mx-auto snap-center md:min-w-0 md:max-w-none">
              <div className="font-bold text-blue-800 mb-2">{item.name}</div>
              <div className="text-gray-700 text-sm">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
