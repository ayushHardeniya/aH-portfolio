import React from "react"; import Image from "next/image"; import Link from "next/link"; import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaFacebook, FaEnvelope, FaMedium } from "react-icons/fa";

export default function Home() { return ( <div className="bg-gray-100 min-h-screen"> {/* Navbar */} <nav className="bg-white shadow-lg p-4 flex justify-between items-center"> <Image src="/signblacktrans.png" alt="Signature" width={150} height={50} /> <div className="space-x-6"> <Link href="#about">About</Link> <Link href="#blogs">Blogs</Link> <Link href="#contact">Contact</Link> </div> </nav>

{/* Hero Section */}
  <header className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('/heroaH.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold">Hi! I'm Ayush Hardeniya</h1>
      <p className="text-lg">[Legal Name: Ayush Sharma]</p>
    </div>
  </header>

  {/* About Section */}
  <section id="about" className="p-10 text-center">
    <h2 className="text-3xl font-bold">About Me</h2>
    <p className="mt-4 text-lg">A passionate reader, blogger, and tech enthusiast. I enjoy solitude, spirituality, and collaborating on meaningful projects.</p>
  </section>

  {/* Blog Section */}
  <section id="blogs" className="p-10 text-center bg-gray-200">
    <h2 className="text-3xl font-bold">Latest Blogs</h2>
    <div className="mt-6 space-y-4">
      <Link href="https://medium.com/@ayushhardeniya.profile/the-happiness-formula-gratitude-that-mindset-43f223a2a825" target="_blank" className="block text-lg text-blue-600">The Happiness Formula - Gratitude & Mindset</Link>
      <Link href="https://medium.com/@ayushhardeniya.profile/direction-or-destination-what-should-i-go-for-50bdb36a7f12" target="_blank" className="block text-lg text-blue-600">Direction or Destination - What Should I Go For?</Link>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-900 text-white p-6 mt-10">
    <h3 className="text-xl text-center">Let's Connect</h3>
    <div className="flex justify-center space-x-6 mt-4">
      <Link href="https://twitter.com/ayushhardeniya" target="_blank"><FaTwitter size={30} /></Link>
      <Link href="https://linkedin.com/in/ayushhardeniya" target="_blank"><FaLinkedin size={30} /></Link>
      <Link href="https://github.com/ayushhardeniya" target="_blank"><FaGithub size={30} /></Link>
      <Link href="https://youtube.com/ayushhardeniya" target="_blank"><FaYoutube size={30} /></Link>
      <Link href="https://instagram.com/ayushhardeniya" target="_blank"><FaInstagram size={30} /></Link>
      <Link href="https://facebook.com/ayushhardeniya" target="_blank"><FaFacebook size={30} /></Link>
      <Link href="mailto:ayushhardeniya.vn@outlook.in" target="_blank"><FaEnvelope size={30} /></Link>
      <Link href="https://medium.com/@ayushhardeniya.profile" target="_blank"><FaMedium size={30} /></Link>
    </div>
    <p className="text-center mt-4">&copy; 2025 ayushHardeniya. All rights reserved.</p>
  </footer>
</div>

); }

