import { useState } from "react"; import Navbar from "../components/Navbar"; import Footer from "../components/Footer"; import BlogList from "../components/BlogList"; import SocialLinks from "../components/SocialLinks";

const Index = () => { const [activeSection, setActiveSection] = useState("about");

return ( <> <Navbar setActiveSection={setActiveSection} /> <div className="content"> {activeSection === "about" && ( <section id="about"> <h1>About Me</h1> <p>Hey! I am Ayush Hardeniya.</p> <p><strong>[Legal Name:</strong> Ayush Sharma<b>]</b></p> </section> )}

{activeSection === "blog" && (
      <section id="blog">
        <h1>My Blog</h1>
        <BlogList />
      </section>
    )}

    {activeSection === "lifestyle" && (
      <section id="lifestyle">
        <h1>About My Lifestyle</h1>
        <p>I live a <strong>disciplined and goal-oriented life</strong>, balancing fitness, knowledge, and personal growth with a structured routine...</p>
      </section>
    )}

    {activeSection === "mystory" && (
      <section id="mystory">
        <h1>Ayush Hardeniya – My Journey</h1>
        <p>From the early morning hours of <b>3 AM</b> to the late-night grind of coding, video editing, and self-improvement...</p>
      </section>
    )}

    {activeSection === "links" && (
      <section id="links">
        <h1>Find Ayush Hardeniya On:</h1>
        <SocialLinks />
        <p>📌 Digital Portfolio: <a href="https://ayushhardeniya.carrd.co/" target="_blank">ayushhardeniya.carrd.co</a></p>
      </section>
    )}

    {activeSection === "contact" && (
      <section id="contact">
        <h1>Contact</h1>
        <p>Email: <a href="mailto:ayushhardeniya.vn@outlook.in">ayushhardeniya.vn@outlook.in</a></p>
      </section>
    )}
  </div>
  <Footer />
</>

); };

export default Index;

      
