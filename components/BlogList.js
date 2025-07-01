import { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      {
        title: "The Happiness Formula - Gratitude & Mindset",
        url: "https://medium.com/@ayushhardeniya.profile/the-happiness-formula-gratitude-that-mindset-43f223a2a825",
      },
      {
        title: "Direction or Destination? What Should I Go For?",
        url: "https://medium.com/@ayushhardeniya.profile/direction-or-destination-what-should-i-go-for-50bdb36a7f12",
      },
    ]);
  }, []);

  return (
    <div className="blog-list">
      <h2>Latest Blogs</h2>
      {blogs.map((blog, index) => (
        <a key={index} href={blog.url} target="_blank">
          {blog.title}
        </a>
      ))}
    </div>
  );
};

export default BlogList;
