import { Link } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Services", url: "#" },
  { label: "Price List", url: "#" },
  { label: "Gallery", url: "#" },
  { label: "Contact", url: "#" },
  { label: "About Us", url: "#" },
];

export default function Header() {
  return (
    <header className="bg-white text-pinklight">
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

        <nav className="flex space-x-10 mx-auto text-base">
          {navItems.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="relative text-dark font-bold hover:text-primary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-center before:h-1 before:w-0 hover:before:w-[50%] before:-bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primary after:origin-center after:h-1 after:w-0 hover:after:w-[50%] after:-bottom-4 after:right-[50%]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
