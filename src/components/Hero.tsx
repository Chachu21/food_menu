import Image from "next/image";
import { Element } from "react-scroll";

export default function Hero() {
  return (
    <Element name="hero">
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Restaurant interior"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Yegna Foodie
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience culinary excellence in every bite
          </p>
          <a
            href="#menu"
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </section>
    </Element>
  );
}
