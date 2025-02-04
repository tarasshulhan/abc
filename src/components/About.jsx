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
            <p className="text-lg text-white mt-8 mb-8 ">
            Advanced Banking Consulting (ABC) is a boutique consulting firm that applies an innovative, forward-thinking approach to banking and microfinance consulting. Our clients include microfinance companies, credit unions, banks, international financial institutions, and central banks worldwide. We serve them directly or in collaboration with other consulting firms, always selecting the most effective approach to meet their unique needs.
            </p>
            <a href="/projects">
            <button
            className="w-full md:w-auto bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Projects
          </button>
            </a>
            </div>

            <div className="mt-8 mb-8 bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex flex-col justify-center items-center">
            <p className="text-lg text-white mt-8 mb-8 ">
            Advanced Banking Consulting (ABC) is a boutique consulting firm that applies an innovative, forward-thinking approach to banking and microfinance consulting. Our clients include microfinance companies, credit unions, banks, international financial institutions, and central banks worldwide. We serve them directly or in collaboration with other consulting firms, always selecting the most effective approach to meet their unique needs.
            </p>
            <a href="/services">
            <button
            className="w-full md:w-auto bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Services
          </button>
            </a>
            </div>
          </div>
          </div>
          
    </section>
    </div>
  );
};

export default About;
