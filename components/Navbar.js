import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="signature">
        <Link href="/">
          <img src="/signblacktrans.png" alt="Logo" width="130" height="80" />
        </Link>
      </div>

      <div className="menu">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>Menu ▼</button>
        {dropdownOpen && (
          <div className="dropdown">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/mystory">My Story</Link>
            <Link href="/lifestyle">Lifestyle</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/links">Links</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
