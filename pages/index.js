import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="hero">
        <img src="/heroaH.jpg" alt="Hero Background" className="hero-img" />
        <h1>Ayush Hardeniya</h1>
        <p>Tech | Creativity | Growth</p>
      </header>
      <BlogList />
      <Footer />
    </>
  );
};

export default Home;
