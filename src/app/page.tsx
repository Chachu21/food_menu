"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import menuDataJson from "../jsonData.json";
interface MenuItem {
  name: string;
  imageUrl: string;
  price: string;
  category: string;
}

export default function Home() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const parsedData: MenuItem[] = menuDataJson.values.slice(1).map((item) => ({
      name: item[0],
      imageUrl: item[1],
      price: item[2],
      category: item[3],
    }));

    setMenuData(parsedData);
    setCategories([...new Set(parsedData.map((item) => item.category))]);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header categories={categories} />
      <section id="hero">
        <Hero />
      </section>
      <section id="menu" className="py-16">
        {categories.map((category) => (
          <div id={`category-${category}`} key={category} className="mb-16">
            <MenuSection
              category={category}
              items={menuData.filter((item) => item.category === category)}
            />
          </div>
        ))}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
