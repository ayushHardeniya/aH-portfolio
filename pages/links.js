import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";

const Links = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Find Ayush Hardeniya On:</h1>
        <SocialLinks />
        <p>📌 Digital Portfolio: <a href="https://ayushhardeniya.carrd.co/" target="_blank">ayushhardeniya.carrd.co</a></p>
      </div>
      <Footer />
    </>
  );
};

export default Links;
