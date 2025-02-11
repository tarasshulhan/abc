import { Link } from 'react-router-dom';
import { clients } from '../data/clients';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const Clients = ({ fromHome = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const displayedClients = fromHome ? clients.slice(0, 6) : clients;

  // Slider settings for mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Client card component to avoid repetition
  const ClientCard = ({ client }) => (
    <div className="flex flex-col justify-between items-center bg-black/35 shadow-md shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full min-h-[25rem] self-stretch">
      <div className="h-24 flex items-center justify-center mb-4 w-full">
        <img
          src={client.logo}
          alt={client.name}
          className="bg-white/45 h-full w-full object-contain rounded-tl-[1.5rem] rounded-br-[1.5rem] p-2"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {client.name}
      </h3>
      <p className="text-white">
        {client.description}
      </p>
      <a href={client.url}>
        <button className="mt-4 bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Visit
        </button>
      </a>
    </div>
  );

  return (
    <section id="clients" className="pt-8 bg-black/50 md:pt-16">
      {/* Main container with curved corners */}
      <div className="bg-black/50 py-10 md:py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl ml-24 md:ml-0 font-bold text-white mb-12 text-center">
          Clients
        </h2>
        
        {isMobile ? (
          // Mobile carousel view
          <div className="w-[100vw]">
            <Slider {...settings}>
              {displayedClients.map((client) => (
                <div key={client.id} className="px-2">
                  <ClientCard client={client} />
                </div>
              ))}
            </Slider>
            {!fromHome && <div className="mt-4 text-white">
              ← {currentSlide + 1} /{displayedClients.length} →
            </div>}
          </div>
        ) : (
          // Desktop grid view
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
            {displayedClients.map((client) => (
              <div key={client.id} className="w-full md:w-1/2 lg:w-1/4">
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        )}

        {/* Conditional "See More" button when displayed on home page */}
        {fromHome && (
          <div className="text-center mt-12">
            <Link to="/clients">
              <button className="bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                See More Clients
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;