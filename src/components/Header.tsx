"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Phone, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";

interface HeaderProps {
  categories: string[];
}

export default function Header({ categories }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveLink = () => {
      const sections = ["hero", "menu", "about", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleActiveLink);
    return () => window.removeEventListener("scroll", handleActiveLink);
  }, []);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-opacity-90" : "py-4"
      }`}
    >
      <Wrapper>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => smoothScroll("hero")}
              className="text-3xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300"
            >
              Yegna Foodie
            </button>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => smoothScroll("menu")}
                className={`text-lg font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 ${
                  activeLink === "menu"
                    ? "underline text-blue-600 font-semibold"
                    : ""
                }`}
              >
                Menu
              </button>
              <button
                onClick={() => smoothScroll("about")}
                className={`text-lg font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 ${
                  activeLink === "about"
                    ? "underline text-blue-600 font-semibold"
                    : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => smoothScroll("contact")}
                className={`text-lg font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 ${
                  activeLink === "contact"
                    ? "underline text-blue-600 font-semibold"
                    : ""
                }`}
              >
                Contact
              </button>
            </nav>
            <button
              className="md:hidden text-gray-800 hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-4">
                <li>
                  <button
                    onClick={() => smoothScroll("hero")}
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 w-full text-left transition-colors duration-300"
                  >
                    <Home size={18} className="mr-2" /> Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothScroll("menu")}
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 w-full text-left transition-colors duration-300"
                  >
                    <BookOpen size={18} className="mr-2" /> Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothScroll("about")}
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 w-full text-left transition-colors duration-300"
                  >
                    <Info size={18} className="mr-2" /> About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => smoothScroll("contact")}
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 w-full text-left transition-colors duration-300"
                  >
                    <Phone size={18} className="mr-2" /> Contact
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="bg-gray-100 overflow-x-auto">
          <ul className="container mx-auto px-4 flex space-x-6 py-2 whitespace-nowrap">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => smoothScroll(`category-${category}`)}
                  className={`text-gray-600 hover:text-gray-900 cursor-pointer text-sm font-medium transition-all duration-300 ${
                    activeLink === `category-${category}`
                      ? "underline  text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}
