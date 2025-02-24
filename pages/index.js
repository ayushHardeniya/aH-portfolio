import Head from 'next/head'; import Navbar from '../components/Navbar'; import Footer from '../components/Footer'; import Image from 'next/image'; import SocialLinks from '../components/SocialLinks'; import BlogList from '../components/BlogList';

export default function Home() { return ( <> <Head> <title>Ayush Hardeniya | Portfolio</title> <meta name="description" content="Official portfolio of Ayush Hardeniya" /> <link rel="icon" href="/favicon.ico" /> </Head>

<Navbar />
  
  {/* Hero Section */}
  <section className="hero">
    <Image src="/heroaH.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
    <div className="hero-content">
      <h1>Ayush Hardeniya</h1>
      <p>Tech Enthusiast | Coder | Video Editor</p>
    </div>
  </section>
  
  {/* About Section */}
  <section id="about">
    <h2>About Me</h2>
    <p>I am Ayush Sharma, known as Ayush Hardeniya, a passionate learner...</p>
  </section>
  
  {/* My Story Section */}
  <section id="mystory">
    <h2>My Story</h2>
    <p>Here is a journey of my experiences...</p>
  </section>
  
  {/* Lifestyle Section */}
  <section id="lifestyle">
    <h2>My Lifestyle</h2>
    <p>Disciplined routine, fitness, coding, and self-improvement...</p>
  </section>
  
  {/* Blog Section */}
  <section id="blog">
    <h2>Latest Blogs</h2>
    <BlogList />
  </section>
  
  {/* Social Links Section */}
  <section id="social">
    <h2>Connect with Me</h2>
    <SocialLinks />
  </section>
  
  {/* Contact Section */}
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: connect@ayushhardeniya.in</p>
  </section>
  
  <Footer />
</>

); }

