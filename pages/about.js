import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>About Me</h1>
        <p>Hey! I am Ayush Hardeniya.</p>
        <p><strong>[Legal Name:</strong> Ayush Sharma<b>]</b></p>
      </div>
      <Footer />
    </>
  );
};

export default About;
