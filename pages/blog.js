import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>My Blog</h1>
        <BlogList />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
