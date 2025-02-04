const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Transformation",
      description: "Led digital transformation initiatives for multiple financial institutions across Central Asia, implementing modern banking systems and digital services.",
      location: "Kazakhstan, Kyrgyzstan",
      year: "2022-2023"
    },
    {
      id: 2,
      title: "Microfinance Development",
      description: "Developed and implemented microfinance programs focusing on rural communities and small businesses.",
      location: "Dominican Republic, Jamaica",
      year: "2021-2022"
    },
    {
      id: 3,
      title: "Banking System Modernization",
      description: "Consulted on the modernization of legacy banking systems and processes for regional banks.",
      location: "Azerbaijan, Armenia",
      year: "2020-2021"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="pt-16 pb-8 bg-black/50">
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Projects
        </h2>
        
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col justify-between bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white mb-4">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-gray-300 text-sm">
                  Location: {project.location}
                </p>
                <p className="text-gray-300 text-sm">
                  Year: {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 