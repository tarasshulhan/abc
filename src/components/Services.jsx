import { services } from '../data/services';

/**
 * Services Component
 * Renders a grid section displaying company services
 */
const Services = () => {
  return (
    <section id="services" className="pt-16 pb-8 bg-black/50">
      {/* Main container with curved borders */}
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Services
        </h2>
        
        {/* Services grid container */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto text-white">
          {/* Map through services to create individual service cards */}
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col justify-between bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 