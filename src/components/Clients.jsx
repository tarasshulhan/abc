import { Link } from 'react-router-dom';
import { clients } from '../data/clients';

const Clients = ({ fromHome = false }) => {
  const displayedClients = fromHome ? clients.slice(0, 6) : clients;

  return (
    <section id="clients" className="pt-16 bg-black/50">
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Trusted Clients
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {displayedClients.map((client) => (
            <div 
              key={client.id}
              className="flex flex-col justify-between items-center bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-1/2 lg:w-1/4 min-h-[20vh] self-stretch"
            >
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
          ))}
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
