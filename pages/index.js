
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaFacebook, FaEnvelope, FaMedium } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Digital signature image */}
          <Image src="/signblacktrans.png" alt="Signature" width={150} height={50} />
        </div>
        <ul className="flex gap-6">
          <li><Link href="#about">My Story</Link></li>
          <li><Link href="#blogs">Blogs</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/heroaH.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">Hi! I'm Ayush Hardeniya</h1>
          <h2 className="text-xl mt-2">[Legal Name: Ayush Sharma]</h2>
          <button
            className="mt-4 px-6 py-2 bg-blue-600 rounded-full text-white"
            onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <div className="container mx-auto mt-4 text-lg text-gray-700">
          <p>
            I’m Ayush Hardeniya, an 18-year-old BTech student and a developer passionate about artificial intelligence and technology.
          </p>
          <p className="mt-2">
            Driven by a deep sense of purpose, I explore AI, read books, practice spirituality, and connect with like-minded individuals.
            I believe in growing through collaboration, challenges, and finding peace in solitude.
          </p>
          <p className="mt-2">
            Currently, I'm reading <em>Do It Today</em> by Darius Foroux, which inspires me to take consistent action toward my goals.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="p-10 text-center bg-gray-200">
        <h2 className="text-3xl font-bold">Latest Blogs</h2>
        <div className="container mx-auto mt-6 space-y-4">
          <Link
            href="https://medium.com/@ayushhardeniya.profile/the-happiness-formula-gratitude-that-mindset-43f223a2a825"
            target="_blank"
            className="block text-lg text-blue-600 hover:underline"
          >
            The Happiness Formula: Gratitude & Mindset
          </Link>
          <Link
            href="https://medium.com/@ayushhardeniya.profile/direction-or-destination-what-should-i-go-for-50bdb36a7f12"
            target="_blank"
            className="block text-lg text-blue-600 hover:underline"
          >
            Direction or Destination: What Should I Go For?
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="container mx-auto mt-4 text-lg text-gray-700">
          <p>Let's collaborate and create something amazing.</p>
          <p className="mt-2">
            Email: <a className="text-blue-600 hover:underline" href="mailto:ayushhardeniya.vn@outlook.in">collab@ayushhardeniya.com</a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-6">
        <h3 className="text-xl text-center">Let's Connect</h3>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://twitter.com/ayushhardeniya" target="_blank"><FaTwitter size={30} /></Link>
          <Link href="https://linkedin.com/in/ayushhardeniya" target="_blank"><FaLinkedin size={30} /></Link>
          <Link href="https://github.com/ayushhardeniya" target="_blank"><FaGithub size={30} /></Link>
          <Link href="https://youtube.com/@ayushhardeniya" target="_blank"><FaYoutube size={30} /></Link>
          <Link href="https://instagram.com/ayushhardeniya" target="_blank"><FaInstagram size={30} /></Link>
          <Link href="https://facebook.com/ayushhardeniya" target="_blank"><FaFacebook size={30} /></Link>
          <Link href="mailto:ayushhardeniya.vn@outlook.in" target="_blank"><FaEnvelope size={30} /></Link>
          <Link href="https://medium.com/@ayushhardeniya.profile" target="_blank"><FaMedium size={30} /></Link>
        </div>
        <p className="text-center mt-4">&copy; 2025 Ayush Hardeniya. All rights reserved.</p>
      </footer>
    </div>
  );
    }
