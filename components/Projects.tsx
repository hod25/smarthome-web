const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">הפרויקטים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-4 rounded-lg">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-64 object-cover mb-4 rounded" />
            <p>תיאור של פרויקט מס' 1</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <img src="/project2.jpg" alt="Project 2" className="w-full h-64 object-cover mb-4 rounded" />
            <p>תיאור של פרויקט מס' 2</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <img src="/project3.jpg" alt="Project 3" className="w-full h-64 object-cover mb-4 rounded" />
            <p>תיאור של פרויקט מס' 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
