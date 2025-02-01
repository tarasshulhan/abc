const About = () => {
  return (
    <div className="bg-black/50">
    <section className="py-8">
          <div className="bg-black/50 p-16 py-24 pb-40 space-y-6 rounded-tr-[15rem] rounded-bl-[15rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="mt-8 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Advanced Banking Consulting"
                className="h-full w-full max-w-3xl rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl"
              />
            </div>
            <p className="text-lg text-white mt-8 mb-8 bg-white/10 p-6 rounded-tr-[3rem] rounded-bl-[3rem] max-w-3xl flex justify-center items-center">
            Advanced Banking Consulting (ABC) is a boutique consulting firm that applies an innovative, forward-thinking approach to banking and microfinance consulting. Our clients include microfinance companies, credit unions, banks, international financial institutions, and central banks worldwide. We serve them directly or in collaboration with other consulting firms, always selecting the most effective approach to meet their unique needs.
            </p>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-[#11403e] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Learn More
          </button>
          </div>
    </section>
    </div>
  );
};

export default About;
