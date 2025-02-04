import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="h-[100vh]">
      <Header />
      <div className="pt-32"> {/* Add padding to account for fixed header */}
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage; 