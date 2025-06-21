import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/wella-makeup-logo.png";

const links = [
  { label: "Services", link: "#services" },
  { label: "Price List", link: "#pricelist" },
  { label: "Gallery", link: "#gallery" },
  { label: "Contact", link: "#contact" },
  { label: "About Us", link: "#about" },
];

export default function Footer() {
  return (
    <footer className="text-dark pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Wella Makeup Logo" className="w-28 mb-4" />
          <p className="font-semibold">
            Wella Makeup
            <br />
            Affordable Beauty, Unforgettable You.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
          <ul className="space-y-2 font-bold text-l">
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
          <ul className="space-y-2 font-medium">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaWhatsapp className="text-2xl" />
              <a
                className="text-l font-bold"
                href="https://wa.me/+6283197320995"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 812-3456-7890
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaInstagram className="text-2xl" />
              <a
                className="text-l font-bold"
                href="https://instagram.com/wellamakeup"
                target="_blank"
                rel="noopener noreferrer"
              >
                @wellamakeup
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-1 w-1/3 bg-primary mx-auto my-6 rounded-full" />

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">Wella Makeup</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
