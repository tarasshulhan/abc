const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "International Finance Corporation (IFC)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/International_Finance_Corporation_logo.svg",
      url: "https://www.ifc.org/en/home"
    },
    {
      id: 2, 
      name: "European Investment Bank (EIB)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/European_Investment_Bank_logo.svg",
      url: "https://www.eib.org/en/index",
      description: "in cooperation with Frankfurt School of Management"
    },
    {
      id: 3,
      name: "European Bank for Reconstruction and Development (EBRD)", 
      logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/EBRD_logo_%282%29.png",
      url: "https://www.ebrd.com/home",
      description: "in cooperation with Frankfurt School of Management"
    },
    {
      id: 4,
      name: "Asian Development Bank (ADB)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Asian_Development_Bank_logo.svg", 
      url: "https://www.adb.org",
      description: "in cooperation with Business Finance Consulting"
    },
    {
      id: 5,
      name: "ACDI/VOCA",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/ACDI-VOCA_logo.png", 
      url: "https://www.acdivoca.org",
      description: ""
    },
    {
      id: 6,
      name: "Development Bank of Jamaica",
      logo: "https://www.greenclimate.fund/sites/default/files/organisation/logo-dbj.png", 
      url: "https://dbankjm.com",
      description: ""
    },
    {
      id: 7,
      name: "Baitushum Bank",
      logo: "/BF-logos-baitushum-removebg-preview.png", 
      url: "https://www.baitushum.kg/en/",
      description: "Kyrgyzstan"
    },
    {
      id: 8,
      name: "Spitamen Bank",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Spitamen_Bank_Logo.png", 
      url: "https://www.spitamenbank.tj/en/personal/",
      description: "Tajikistan"
    },
    {
      id: 9,
      name: "Kredagro NBFI",
      logo: "https://kredaqro.com/wp-content/uploads/2016/12/kreedaqro-logo2.png", 
      url: "https://kredaqro.com",
      description: "Azerbaijan"
    },
    {
      id: 10,
      name: "KMF MFI",
      logo: "/kmflogo.svg", 
      url: "https://new.kmf.kz/en/",
      description: "Kazakhstan (in cooperation with Irfar Consulting)"
    }
  ];

  return (
    <section id="clients" className="pt-16 pb-8 bg-black/50">
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Trusted Clients
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex flex-col justify-between items-center bg-white/15 p-6 rounded-tl-[3rem] rounded-br-[3rem] w-full md:w-1/2 lg:w-1/4 min-h-[20vh] self-stretch"
            >
              <div className="h-24 flex items-center justify-center mb-4 w-full">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="bg-white/30 h-full w-full object-contain rounded-tl-[1.5rem] rounded-br-[1.5rem] p-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {client.name}
              </h3>
              <p className="text-white">
                {client.description}
              </p>
              <a href={client.url}>
                <button className="mt-4 bg-[#11403e] hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Visit
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
