import Image from "next/image";
import Wrapper from "./Wrapper";

interface MenuItem {
  name: string;
  imageUrl: string;
  price: string;
  category: string;
}

interface MenuSectionProps {
  category: string;
  items: MenuItem[];
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  return (
    <Wrapper>
      <section className="mb-16">
        <h2 className="text-3xl text-gray-700 font-bold mb-8 text-center">
          {category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-400 font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
