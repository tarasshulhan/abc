import Clients from '../components/Clients';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientsPage = () => {
  return (
    <>
      <Header />
      <div className="pt-32"> {/* Add padding to account for fixed header */}
        <Clients />
      </div>
      <Footer />
    </>
  );
};

export default ClientsPage; 