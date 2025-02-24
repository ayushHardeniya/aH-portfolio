import Navbar from "../components/Navbar"; import Footer from "../components/Footer"; import SocialLinks from "../components/SocialLinks"; import { FaArrowUp } from "react-icons/fa"; import { useEffect, useState } from "react";

const Home = () => { const [showScroll, setShowScroll] = useState(false);

useEffect(() => { window.addEventListener("scroll", () => { setShowScroll(window.scrollY > 300); }); }, []);

return ( <> <Navbar /> <div className="container mx-auto px-4 py-8 text-gray-800"> {/* Lifestyle Section */} <section id="lifestyle" className="mb-12"> <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About My Lifestyle</h1> <p className="text-lg text-center max-w-2xl mx-auto"> I live a <strong>disciplined and goal-oriented life</strong>, balancing <strong>fitness, knowledge, and personal growth</strong> with a structured routine. My day starts early at <strong>3 AM</strong>, allowing focused time for <strong>learning, meditation, and self-improvement</strong>. </p> </section>

{/* Social Links */}
    <section id="social-links" className="mb-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Connect with Me</h2>
      <SocialLinks />
    </section>
    
    {/* My Story */}
    <section id="my-story" className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">My Story</h2>
      <p className="text-lg max-w-3xl mx-auto text-center">
        My journey has been all about <strong>learning, growth, and consistency</strong>. From coding to fitness, I believe in optimizing every aspect of life for <strong>long-term success</strong>.
      </p>
    </section>
  </div>
  
  {/* Scroll to Top Button */}
  {showScroll && (
    <button
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp size={24} />
    </button>
  )}
  
  <Footer />
</>

); };

export default Home;

      
