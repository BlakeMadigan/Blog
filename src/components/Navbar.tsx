"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-indigo-500 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="/">📜 Blake Madigan</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } sm:block space-x-8 text-xl`}
            aria-label="main"
          >
            <a href="/me" className="hover:opacity-80 font-medium">
              About
            </a>
            <a href="/blog" className="hover:opacity-80 font-medium">
              Blog
            </a>
            <a href="/projects" className="hover:opacity-80 font-medium">
              Projects
            </a>
            <a href="#" className="hover:opacity-80 font-medium">
              Resume
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute bg-slate-800 top-0 w-full flex flex-col justify-content-center text-5xl origin-top animate-open-menu ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <button className="text-8x1 self-end px-6" onClick={toggleMenu}>
          &times;
        </button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a
            href="/"
            className="w-full text-center py-6 hover:opacity-80"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/me"
            className="w-full text-center py-6 hover:opacity-80"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/blog"
            className="w-full text-center py-6 hover:opacity-80"
            onClick={toggleMenu}
          >
            Blog
          </a>
          <a
            href="/projects"
            className="w-full text-center py-6 hover:opacity-80"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="/"
            className="w-full text-center py-6 hover:opacity-80"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </nav>
      </section>
    </header>
  );
}
