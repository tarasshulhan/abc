import { Link } from 'react-router-dom';
import { clients } from '../data/clients';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';

const Clients = ({ fromHome = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const displayedClients = fromHome ? clients.slice(0, 6) : clients;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <div className="text-white text-center">
          {dots.findIndex(dot => dot.props.className.includes('slick-active')) + 1}/{dots.length}
        </div>
      </div>
    )
  };

  const renderClientCard = (client) => (
    <div className="flex flex-col justify-between items-center bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] min-h-[25vh]">
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
    <section id="clients" className="pt-16 bg-black/50 min-h-screen flex flex-col justify-center">
      <div className="bg-black/50 p-8 md:p-16 py-12 md:py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem] flex-grow flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Trusted Clients
        </h2>
        
        <div className="max-w-6xl mx-auto px-4 flex-grow flex flex-col justify-center">
          {isMobile ? (
            <Slider {...settings}>
              {displayedClients.map((client) => (
                <div key={client.id} className="px-4 py-8">
                  {renderClientCard(client)}
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedClients.map((client) => (
                <div key={client.id}>
                  {renderClientCard(client)}
                </div>
              ))}
            </div>
          )}
        </div>

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
