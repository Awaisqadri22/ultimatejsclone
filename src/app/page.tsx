import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Menu Bar */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <span className="text-xl font-bold">AIQ</span>
        <Link href="/interview">
          <button className="bg-blue-500 px-4 py-2 rounded">Interview</button>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative flex-col bg-gray-800 text-white">
        {/* Full-screen background */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-5xl font-bold">Learn JavaScript</h2>
          <h2 className="text-4xl font-bold mt-4">Make Real World Projects</h2>
          <h2 className="text-4xl font-bold mt-4">
            & Ace Your Interview Skills
          </h2>
          <p className="text-2xl text-center mt-4">
            Join our community of 50,000+ developers who've landed jobs at top
            tech companies. Get hands-on experience with 100+ interactive
            projects and master JavaScript interview questions. No payment
            required, forever free!
          </p>

          {/* Contact Me Form */}
          <form className="mt-8 w-full max-w-md bg-green-300 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="number"
              >
                Number
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="number"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded transition-transform duration-300 transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
