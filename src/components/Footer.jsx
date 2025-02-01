const Footer = () => {
  return (
    <footer className="bg-black/50 text-white pt-8">
        <div className="mx-auto bg-black/50 p-16 py-24 space-y-6 rounded-tr-[15rem]">
          <p>&copy; {new Date().getFullYear()} Advanced Banking Consulting. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;
