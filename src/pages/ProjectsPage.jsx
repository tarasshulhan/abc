import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="pt-32"> {/* Add padding to account for fixed header */}
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage; 