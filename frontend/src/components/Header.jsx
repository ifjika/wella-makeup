import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "./Logo";

const navItems = [
  { label: "Services", url: "services" },
  { label: "Price List", url: "/price-list" },
  { label: "Gallery", url: "gallery" },
  { label: "Contact", url: "contact" },
  { label: "About Us", url: "about-us" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 via-40% via-pink-100 via-70% to-pink-200" />
      <div
        className={`relative transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="relative inline-block cursor-pointer transition-all ease-in-out
    before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-1 before:w-0 hover:before:w-[50%] before:-bottom-1 before:left-[50%]
    after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-1 after:w-0 hover:after:w-[50%] after:-bottom-1 after:right-[50%]"
          >
            <div className="container mx-auto flex justify-between items-center">
              <Logo className="h-16 w-auto align-middle" />
            </div>
          </Link>

          <nav className="flex space-x-10 mx-auto text-dark">
            {navItems.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="relative text-dark font-bold hover:text-primary-darkpink cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-1 before:w-0 hover:before:w-[50%] before:-bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-1 after:w-0 hover:after:w-[50%] after:-bottom-4 after:right-[50%]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
