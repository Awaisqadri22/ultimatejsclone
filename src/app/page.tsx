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
      <main className="flex-grow flex items-center justify-center">
        {/* You can add any main content here if needed */}
      </main>
    </div>
  );
}
