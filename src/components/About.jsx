import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if screen is mobile
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

  const aboutItems = [
    {
      icon: "🚀",
      text: "Advanced Banking Consulting (ABC) is a boutique consulting firm that applies an innovative, forward-thinking approach to banking and microfinance consulting. Our clients include microfinance companies, credit unions, banks, international financial institutions, and central banks worldwide.",
      buttonText: "Projects",
      buttonLink: "/projects"
    },
    {
      icon: "💼",
      text: "Regardless of their size, all our clients receive our full, undivided attention. Our extensive network of banking and financial industry professionals, representing diverse nationalities and expertises, allows us to assemble tailored teams to address a wide range of projects.",
      buttonText: "Services",
      buttonLink: "/services"
    }
  ];

  return (
    <div className="bg-black/50">
      <section id="about" className="pt-8 md:pt-16">
        <div className="bg-black/50 pt-10 pb-16 md:py-24 md:pb-28 space-y-6 rounded-tr-[15rem] rounded-bl-[15rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Us
          </h2>
          
          {isMobile ? (
            // Mobile carousel view
            <div className="w-[100vw]">
              <Slider {...settings}>
                {aboutItems.map((item, index) => (
                  <div key={index} className="px-1">
                    <div className="bg-black/35 shadow-md shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] min-h-[35rem] flex flex-col justify-center items-center">
                      <span className="text-4xl mb-4">{item.icon}</span>
                      <p className="text-lg text-white mt-4 mb-4">
                        {item.text}
                      </p>
                      <Link to={item.buttonLink}>
                        <button className="w-full bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                          {item.buttonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="mt-4 text-white text-center">
                ← {currentSlide + 1} /{aboutItems.length} →
              </div>
            </div>
          ) : (
            // Desktop grid view
            <div className="hidden md:grid grid-cols-1 gap-8 max-w-6xl mx-auto md:grid-cols-2">
              <div className="md:mt-8 md:mb-8 bg-black/35 shadow-md shadow-white/5 md:shadow-lg md:shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex flex-col justify-center items-center">
                <span className="text-4xl mb-4">🚀</span>
                <p className="text-lg text-white mt-4 mb-4 md:mb-8 md:mt-8">
                  Advanced Banking Consulting (ABC) is a boutique consulting firm that applies an innovative, forward-thinking approach to banking and microfinance consulting. Our clients include microfinance companies, credit unions, banks, international financial institutions, and central banks worldwide.
                </p>
                <Link to="/projects">
                  <button
                    className="w-full md:w-auto bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Projects
                  </button>
                </Link>
              </div>

              <div className="md:mt-8 mb-8 bg-black/35 shadow-md shadow-white/5 md:shadow-lg md:shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex flex-col justify-center items-center">
                <span className="text-4xl mb-4">💼</span>
                <p className="text-lg text-white mt-4 mb-4 md:mb-8 md:mt-8a">
                  Regardless of their size, all our clients receive our full, undivided attention. Our extensive network of banking and financial industry professionals, representing diverse nationalities and expertises, allows us to assemble tailored teams to address a wide range of projects.
                </p>
                <Link to="/services">
                  <button
                    className="w-full md:w-auto bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Services
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="text-center">
            <Link to="/about">
              <button className="bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
