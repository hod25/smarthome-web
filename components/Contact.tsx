const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">צור קשר</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="שם" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="אימייל" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <textarea placeholder="הודעה" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-xl shadow-lg hover:bg-blue-700">
            שלח הודעה
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
