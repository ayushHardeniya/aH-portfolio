import { useState } from "react"; import Navbar from "../components/Navbar"; import Footer from "../components/Footer"; import BlogList from "../components/BlogList"; import SocialLinks from "../components/SocialLinks";

const Home = () => { const [activeSection, setActiveSection] = useState("about");

return ( <> <Navbar setActiveSection={setActiveSection} />

{/* About Section */}
  <section id="about" className="content">
    <h1>About Me</h1>
    <p>Hey! I am Ayush Hardeniya.</p>
    <p><strong>[Legal Name:</strong> Ayush Sharma<b>]</b></p>
  </section>
  
  {/* My Story Section */}
  <section id="mystory" className="content">
    <h1>My Journey</h1>
    <p>From the early morning hours of <b>3 AM</b> to the late-night grind of <b>coding</b>, <b>video editing</b>, and <b>self-improvement</b>, my journey has always been about pushing limits and breaking barriers.</p>
  </section>
  
  {/* Lifestyle Section */}
  <section id="lifestyle" className="content">
    <h1>About My Lifestyle</h1>
    <p>I live a <strong>disciplined and goal-oriented life</strong>, balancing fitness, knowledge, and personal growth with a structured routine.</p>
  </section>
  
  {/* Blog Section */}
  <section id="blog" className="content">
    <h1>My Blog</h1>
    <BlogList />
  </section>
  
  {/* Links Section */}
  <section id="links" className="content">
    <h1>Find Me On</h1>
    <SocialLinks />
    <p>📌 Digital Portfolio: <a href="https://ayushhardeniya.carrd.co/" target="_blank">ayushhardeniya.carrd.co</a></p>
  </section>
  
  {/* Contact Section */}
  <section id="contact" className="content">
    <h1>Contact</h1>
    <p>Email: <a href="mailto:ayushhardeniya.vn@outlook.in">ayushhardeniya.vn@outlook.in</a></p>
  </section>
  
  <Footer />
</>

); };

export default Home;

    
