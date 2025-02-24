import { useEffect } from "react"; import Navbar from "../components/Navbar"; import Footer from "../components/Footer"; import SocialLinks from "../components/SocialLinks"; import BlogList from "../components/BlogList";

const Home = () => { useEffect(() => { const links = document.querySelectorAll("nav a"); links.forEach(link => { link.addEventListener("click", event => { event.preventDefault(); const targetId = link.getAttribute("href").substring(1); document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); }); }); }, []);

return ( <> <Navbar />

{/* Hero Section */}
  <section id="home" className="hero-section text-center py-20 bg-gray-900 text-white">
    <h1 className="text-5xl font-bold">Welcome to Ayush Hardeniya's Space</h1>
    <p className="mt-4 text-lg">A blend of technology, lifestyle, and discipline.</p>
  </section>

  {/* About Section */}
  <section id="about" className="py-16 px-10 bg-gray-100">
    <h2 className="text-4xl font-bold text-center">About Me</h2>
    <p className="mt-4 text-center max-w-3xl mx-auto">
      I am <strong>Ayush Hardeniya</strong> [Legal Name: <strong>Ayush Sharma</strong>], a tech enthusiast, video editor, and disciplined learner passionate about coding and self-improvement.
    </p>
  </section>

  {/* My Story Section */}
  <section id="mystory" className="py-16 px-10 bg-white">
    <h2 className="text-4xl font-bold text-center">My Story</h2>
    <p className="mt-4 max-w-3xl mx-auto text-center">
      My journey started with an interest in <strong>technology</strong> and <strong>self-discipline</strong>. Waking up at <strong>3 AM</strong> has given me the edge to balance learning and personal growth.
    </p>
  </section>

  {/* Lifestyle Section */}
  <section id="lifestyle" className="py-16 px-10 bg-gray-100">
    <h2 className="text-4xl font-bold text-center">Lifestyle</h2>
    <ul className="mt-4 max-w-3xl mx-auto">
      <li>💪 Strength Training & Yoga for fitness</li>
      <li>📚 High-end coding & video editing</li>
      <li>🕰️ Structured time management for efficiency</li>
    </ul>
  </section>

  {/* Blog Section */}
  <section id="blog" className="py-16 px-10 bg-white">
    <h2 className="text-4xl font-bold text-center">Blog</h2>
    <BlogList />
  </section>

  {/* Social Links Section */}
  <section id="links" className="py-16 px-10 bg-gray-100">
    <h2 className="text-4xl font-bold text-center">Find Me Online</h2>
    <SocialLinks />
  </section>

  {/* Contact Section */}
  <section id="contact" className="py-16 px-10 bg-white">
    <h2 className="text-4xl font-bold text-center">Contact</h2>
    <p className="mt-4 text-center">You can reach me via email at <strong>connect@ayushhardeniya.in</strong></p>
  </section>

  <Footer />
</>

); };

export default Home;

      
