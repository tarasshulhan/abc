import { services } from '../data/services';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Services Component
 * Renders a grid section displaying company services
 */
const Services = () => {
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
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <section id="services" className="pt-8 pb-8 bg-black/50 md:pt-16">
      {/* Main container with curved borders */}
      <div className="bg-black/50 py-10 md:py-24 pb-16 md:pb-32 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Services
        </h2>
        
        {isMobile ? (
          <div className="w-[100vw] max-w-md mx-auto relative">
            <Slider {...settings}>
              {services.map((service) => (
                <div key={service.id} className="px-1">
                  <div className="flex flex-col justify-start bg-black/35 shadow-md shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full min-h-[28rem]">
                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="mt-4 text-white">
              ← {currentSlide + 1}/{services.length} →
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto text-white">
            {services.map((service) => (
              <div 
                key={service.id}
                className="flex flex-col justify-start bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] min-h-[25rem] w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <div>
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                  </h3>
                </div>
                <div>
                  <p>
                    {service.description}
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

export default Services; 