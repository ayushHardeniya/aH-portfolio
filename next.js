// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Hardeniya | Personal Portfolio</title>
        <meta
          name="description"
          content="Ayush Hardeniya – A student dedicated to continuous growth, disciplined living, and a fighter's mindset. Explore my journey, values, and digital presence."
        />
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/android-chrome-512x512.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="logo">
            <Image
              src="/assets/profilePic.jpg"
              alt="Ayush Hardeniya"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#values" className="hover:text-blue-600">Values</a></li>
              <li><a href="#digital" className="hover:text-blue-600">DevVerse</a></li>
              <li><a href="#blogs" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#connect" className="hover:text-blue-600">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/banneraHnew.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ayush Hardeniya</h1>
          <p className="text-xl mb-2">Learning, Building, and Growing with Purpose</p>
          <h4 className="text-sm text-gray-200 mb-4">Man in the Making</h4>
          <Link href="https://medium.com/@ayushHardeniya" passHref>
            <a target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Read My Blog
            </a>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-12 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          I'm Ayush Hardeniya (Legal Name: Ayush Sharma), an 18-year-old Indian student on a journey to become the best version of myself. I believe in growth through discipline and focus.
        </p>
        <p className="text-lg text-gray-700">
          My daily routine starts at 3 AM, filled with meditation, yoga, and strength training. I maintain a strict diet—avoiding junk and processed foods—to keep both my body and mind sharp.
        </p>
      </section>

      {/* Values Section */}  
      <section id="values" className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center">What Drives Me</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Unshakable Discipline */}\n          <div className="p-6 border-l-4 border-blue-600 bg-white shadow rounded">\n            <h3 className="text-2xl font-semibold mb-2">Unshakable Discipline</h3>\n            <p className=\"text-gray-600\">Fixed routines with early mornings and focused work keep my effectiveness at its peak.</p>\n          </div>\n          {/* Relentless Growth */}\n          <div className="p-6 border-l-4 border-green-600 bg-white shadow rounded">\n            <h3 className=\"text-2xl font-semibold mb-2\">Relentless Growth</h3>\n            <p className=\"text-gray-600\">I strive to uncover the best version of myself by continuously learning and evolving in every aspect of life.</p>\n          </div>\n          {/* Inner Harmony */}\n          <div className="p-6 border-l-4 border-yellow-600 bg-white shadow rounded">\n            <h3 className=\"text-2xl font-semibold mb-2\">Inner Harmony</h3>\n            <p className=\"text-gray-600\">Yoga, meditation, and balanced living help me maintain focus and clarity.</p>\n          </div>\n          {/* Mastering the Mind */}\n          <div className="p-6 border-l-4 border-purple-600 bg-white shadow rounded\">\n            <h3 className=\"text-2xl font-semibold mb-2\">Mastering the Mind</h3>\n            <p className=\"text-gray-600\">Cultivating self-awareness and clarity to navigate challenges and achieve true growth.</p>\n          </div>\n        </div>\n      </section>\n      \n      {/* Digital Presence Section (DevVerse) */}\n      <section id=\"digital\" className=\"container mx-auto px-6 py-12\">\n        <h2 className=\"text-4xl font-bold mb-4 text-center\">DevVerse</h2>\n        <p className=\"text-lg text-gray-700 mb-6 text-center\">\n          Explore my digital footprint – profiles on LeetCode, CodeChef, HackerRank, GitHub, GitLab, GeeksforGeeks, and more.\n        </p>\n        <div className=\"flex flex-wrap justify-center gap-4\">\n          <a href=\"https://leetcode.com/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-orange-500 text-white\">LeetCode</a>\n          <a href=\"https://www.codechef.com/users/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-orange-500 text-white\">CodeChef</a>\n          <a href=\"https://www.hackerrank.com/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-green-500 text-white\">HackerRank</a>\n          <a href=\"https://github.com/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-gray-900 text-white\">GitHub</a>\n          <a href=\"https://gitlab.com/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-orange-800 text-white\">GitLab</a>\n          <a href=\"https://geeksforgeeks.org/user/ayushHardeniya\" target=\"_blank\" className=\"px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-green-700 text-white\">GeeksforGeeks</a>\n        </div>\n      </section>\n      \n      {/* Blog Section */}\n      <section id=\"blogs\" className=\"container mx-auto px-6 py-12\">\n        <h2 className=\"text-4xl font-bold mb-4 text-center\">Blogs</h2>\n        <p className=\"text-lg text-gray-700 mb-6 text-center\">\n          Read my latest reflections on Medium.\n        </p>\n        <div id=\"blog-container\" className=\"space-y-6\">\n          <!-- Dynamic blog posts will be loaded here via script.js -->\n        </div>\n      </section>\n      \n      {/* Connect Section */}\n      <section id=\"connect\" className=\"container mx-auto px-6 py-12 bg-gray-50\">\n        <h2 className=\"text-4xl font-bold mb-4 text-center\">Let’s Connect</h2>\n        <p className=\"text-lg text-gray-700 mb-6 text-center\">\n          I'm always open to collaborations and meaningful conversations. Reach out if you resonate with my journey.\n        </p>\n        <p className=\"text-lg font-semibold text-center\">\n          <a href=\"mailto:ayushhardeniya.vn@outlook.in\" className=\"text-blue-600 hover:underline\">collab@ayushhardeniya.com</a>\n        </p>\n      </section>\n      \n      {/* Footer */}\n      <footer className=\"container mx-auto text-center py-6\">\n        <p>&copy; 2024 Ayush Hardeniya. All rights reserved.</p>\n      </footer>\n      \n      <script src=\"/script.js\"></script>\n    </>\n  );\n}\n\nexport default Home;\n"}
