import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container max-w-[1336px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4"> Yegna Foodie</h3>
            <p className="mb-4">
              Bringing culinary excellence to your table since 2010.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Yegna Foodie. All rights
              reserved.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Foodie Street</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>Phone: +251 123 456 789</p>
            <p>Email: info@yegnafoodie.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
