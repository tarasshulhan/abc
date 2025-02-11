import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black/50">
    <section id="about" className="pt-16">
          <div className="bg-black/50 p-16 py-24 pb-40 space-y-6 rounded-tr-[15rem] rounded-bl-[15rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Us
            </h2>
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto md:grid-cols-2">
            <div className="mt-8 mb-8 bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex flex-col justify-center items-center">
            <span className="text-4xl mb-4">🚀</span>
            <p className="text-lg text-white mt-8 mb-8 ">
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

            <div className="mt-8 mb-8 bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex flex-col justify-center items-center">
            <span className="text-4xl mb-4">💼</span>
            <p className="text-lg text-white mt-8 mb-8 ">
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
          </div>
          
    </section>
    </div>
  );
};

export default About;
