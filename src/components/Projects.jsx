import { projects } from '../data/projects';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Projects Component
 * Displays a responsive grid of company projects with details
 */
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    // Main projects section with semi-transparent background
    <section id="projects" className="pt-8 pb-8 bg-black/50 md:pt-16">
      {/* Container with curved borders */}
      <div className="bg-black/50 py-10 md:py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl ml-24 md:ml-0 font-bold text-white mb-12 text-center">
          Projects
        </h2>
        
        {isMobile ? (
          <div className="max-w-md mx-auto relative w-[100vw]">
            <Slider {...settings}>
              {projects.map((project) => (
                <div key={project.id} className="px-2">
                  <div className="flex flex-col justify-between bg-black/35 shadow-md shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full min-h-[38rem]">
                    <div>
                      <div className="text-4xl mb-4">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-white text-lg mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-gray-300">
                        Location: {project.location}
                      </p>
                      <p className="text-gray-300">
                        Timeline: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="mt-4 text-white">
              ← {currentSlide + 1}/{projects.length} →
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col justify-between bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              >
                {/* Project title and description */}
                <div>
                  <div className="text-4xl mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white text-lg mb-4">
                    {project.description}
                  </p>
                </div>
                {/* Project metadata (location and year) */}
                <div className="mt-auto">
                  <p className="text-gray-300">
                    Location: {project.location}
                  </p>
                  <p className="text-gray-300">
                    Timeline: {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 