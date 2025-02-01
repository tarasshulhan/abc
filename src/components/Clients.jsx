const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "International Finance Corporation (IFC)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/International_Finance_Corporation_logo.svg",
      description: ""
    },
    {
      id: 2, 
      name: "European Investment Bank (EIB)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/European_Investment_Bank_logo.svg",
      description: "in cooperation with Frankfurt School of Management"
    },
    {
      id: 3,
      name: "European Bank for Reconstruction and Development (EBRD)", 
      logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/EBRD_logo_%282%29.png",
      description: "in cooperation with Frankfurt School of Management"
    },
    {
      id: 4,
      name: "Asian Development Bank (ADB)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Asian_Development_Bank_logo.svg", 
      description: "in cooperation with Business Finance Consulting"
    },
    {
      id: 5,
      name: "ACDI/VOCA",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/ACDI-VOCA_logo.png", 
      description: ""
    },
    {
      id: 6,
      name: "Development Bank of Jamaica",
      logo: "https://www.greenclimate.fund/sites/default/files/organisation/logo-dbj.png", 
      description: ""
    },
    {
      id: 7,
      name: "Baitushum Bank",
      logo: "src/assets/BF-logos-baitushum-removebg-preview.png", 
      description: "Kyrgyzstan"
    },
    {
      id: 8,
      name: "Spitamen Bank",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Spitamen_Bank_Logo.png", 
      description: "Tajikistan"
    },
    {
      id: 9,
      name: "Kredagro NBFI",
      logo: "https://kredaqro.com/wp-content/uploads/2016/12/kreedaqro-logo2.png", 
      description: "Azerbaijan"
    },
    {
      id: 10,
      name: "KMF MFI",
      logo: "src/assets/kmflogo.svg", 
      description: "Kazakhstan (in cooperation with Irfar Consulting)"
    }
  ];

  return (
    <section className="py-16 pt-32 bg-black/50">
      <div className="bg-black/50 p-16 py-24 w-[100vw] rounded-tl-[15rem] rounded-br-[15rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Trusted Clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="bg-white/15 p-6 rounded-tl-[3rem] rounded-br-[3rem]"
            >
              <div className="h-24 flex items-center justify-center mb-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
