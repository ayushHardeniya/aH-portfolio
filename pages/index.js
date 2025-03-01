export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section id="values" className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center">What Drives Me</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Unshakable Discipline */}
          <div className="p-6 border-l-4 border-blue-600 bg-white shadow rounded">
            <h3 className="text-2xl font-semibold mb-2">Unshakable Discipline</h3>
            <p className="text-gray-600">Fixed routines with early mornings and focused work keep my effectiveness at its peak.</p>
          </div>
          {/* Relentless Growth */}
          <div className="p-6 border-l-4 border-green-600 bg-white shadow rounded">
            <h3 className="text-2xl font-semibold mb-2">Relentless Growth</h3>
            <p className="text-gray-600">I strive to uncover the best version of myself by continuously learning and evolving.</p>
          </div>
          {/* Inner Harmony */}
          <div className="p-6 border-l-4 border-yellow-600 bg-white shadow rounded">
            <h3 className="text-2xl font-semibold mb-2">Inner Harmony</h3>
            <p className="text-gray-600">Yoga, meditation, and balanced living help me maintain focus and clarity.</p>
          </div>
          {/* Mastering the Mind */}
          <div className="p-6 border-l-4 border-purple-600 bg-white shadow rounded">
            <h3 className="text-2xl font-semibold mb-2">Mastering the Mind</h3>
            <p className="text-gray-600">Cultivating self-awareness and clarity to navigate challenges and achieve true growth.</p>
          </div>
        </div>
      </section>

      {/* Digital Presence Section */}
      <section id="digital" className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4 text-center">DevVerse</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Explore my digital footprint – profiles on various platforms.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "LeetCode", url: "https://leetcode.com/ayushHardeniya" },
            { name: "CodeChef", url: "https://www.codechef.com/users/ayushHardeniya" },
            { name: "HackerRank", url: "https://www.hackerrank.com/ayushHardeniya" },
            { name: "GitHub", url: "https://github.com/ayushHardeniya" },
            { name: "GitLab", url: "https://gitlab.com/ayushHardeniya" },
            { name: "GeeksforGeeks", url: "https://geeksforgeeks.org/user/ayushHardeniya" },
          ].map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-gradient-to-r from-gray-500 to-blue-500 text-white"
            >
              {site.name}
            </a>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Blogs</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Read my latest reflections on Medium.
        </p>
      </section>

      {/* Connect Section */}
      <section id="connect" className="container mx-auto px-6 py-12 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-lg text-gray-700 mb-6">
          I'm always open to collaborations and meaningful conversations. Reach out if you resonate with my journey.
        </p>
        <p className="text-lg font-semibold">
          <a href="mailto:ayushhardeniya.vn@outlook.com" className="text-blue-600 hover:underline">
            ayushhardeniya.vn@outlook.com
          </a>
        </p>
      </section>
    </div>
  );
}
