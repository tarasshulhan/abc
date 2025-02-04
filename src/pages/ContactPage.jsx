import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Header />
      <div className="pt-32"> {/* Add padding to account for fixed header */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 