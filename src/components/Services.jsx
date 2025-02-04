const Services = () => {
  const services = [
    {
      id: 1,
      title: "Digital Banking Transformation",
      description: "Comprehensive digital transformation services for financial institutions, including strategy development, implementation, and training.",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Microfinance Consulting",
      description: "Expert guidance on microfinance operations, risk management, and program development for financial inclusion.",
      icon: "💰"
    },
    {
      id: 3,
      title: "Banking Systems Modernization",
      description: "End-to-end support for modernizing banking infrastructure, processes, and technology systems.",
      icon: "🏦"
    },
    {
      id: 4,
      title: "Risk Management",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "⚖️"
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "🌐"
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "🌐"
    },
    {
      id: 7,
      title: "Digital Transformation",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "🌐"
    },
    {
      id: 8,
      title: "Digital Transformation",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "🌐"
    },
    {
      id: 9,
      title: "Digital Transformation",
      description: "Development and implementation of comprehensive risk management frameworks and strategies.",
      icon: "🌐"
    },

  ];

  return (
    <section id="services" className="pt-16 pb-8 bg-black/50">
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col justify-between bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white">
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