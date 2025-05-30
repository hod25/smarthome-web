const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">בקרת תאורה</h3>
            <p>שליטה חכמה בתאורה, כולל הגדרות אישיות וצפייה בסצנות שונות לפי זמן ביום.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">בקרת טמפרטורה</h3>
            <p>אפשרות לשלוט על טמפרטורת הבית, להפעיל את החימום/קירור במרחק.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">מערכות אבטחה</h3>
            <p>התקנת מערכות מצלמות חכמות, חיישני תנועה וגלאים על מנת להבטיח את ביטחונך.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
