import Image from "next/image";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100">
      <Wrapper>
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.h2
            className="text-5xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the Heart of Yegna Foodie
          </motion.h2>

          {/* Introduction & Values */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                At Yegna Foodie, we are more than just a restaurant; we’re a
                celebration of culture, creativity, and culinary excellence.
                Founded in Addis Ababa by Chef Maria, we aim to bring together
                the rich heritage of Ethiopian flavors and the sophisticated
                techniques of global cuisine.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our story began in 2010, with a simple dream of creating dishes
                that tell stories through flavors. With every ingredient sourced
                locally and globally, we bring fresh, vibrant meals that
                transform ordinary dining into extraordinary experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                We take pride in our diverse menu, which blends traditional
                Ethiopian dishes with contemporary twists. Each dish is crafted
                with love, passion, and a dedication to quality, ensuring that
                every bite transports you on a culinary adventure.
              </p>
            </div>

            <motion.div
              className="relative h-[400px] md:h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                alt="Chef preparing food"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">
              Join Us for an Unforgettable Experience
            </h3>
            <p className="text-lg text-gray-500 max-w-lg mx-auto mb-6">
              Whether you&apos;re a passionate food lover, a curious traveler,
              or someone looking for a special dining experience, Yegna Foodie
              invites you to be part of our story. Let&apos;s create lasting
              memories over food that feels like home.
            </p>
            <a
              href="#menu"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-xl font-medium transition-transform transform hover:scale-105 hover:bg-orange-700"
            >
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
}
