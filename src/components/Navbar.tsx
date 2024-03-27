export default function Navbar() {
  return (
    <header className="bg-indigo-500 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="/">📜 Blake Madigan</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="/me" className="hover:opacity-80 font-medium">
              About
            </a>
            <a href="/blog" className="hover:opacity-80 font-medium">
              Blog
            </a>
            <a href="/projects" className="hover:opacity-80 font-medium">
              Projects
            </a>
            <a href="/" className="hover:opacity-80 font-medium">
              Resume
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
}
