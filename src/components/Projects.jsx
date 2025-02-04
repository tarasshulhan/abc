import { projects } from '../data/projects';

/**
 * Projects Component
 * Displays a responsive grid of company projects with details
 */
const Projects = () => {
  return (
    // Main projects section with semi-transparent background
    <section id="projects" className="pt-16 pb-8 bg-black/50">
      {/* Container with curved borders */}
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Projects
        </h2>
        
        {/* Projects grid container */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {/* Map through projects to create individual project cards */}
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col justify-between bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              {/* Project title and description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white mb-4">
                  {project.description}
                </p>
              </div>
              {/* Project metadata (location and year) */}
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