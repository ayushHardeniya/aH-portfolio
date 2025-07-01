import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ayush Hardeniya</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
