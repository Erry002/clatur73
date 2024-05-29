import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          <div className="flex gap-5 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx("text-gray-700 hover:text-gray-900", {
                  "font-bold": isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                clsx("text-gray-700 hover:text-gray-900", {
                  "font-bold": isActive,
                })
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx("text-gray-700 hover:text-gray-900", {
                  "font-bold": isActive,
                })
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/attrazioni"
              className={({ isActive }) =>
                clsx("text-gray-700 hover:text-gray-900", {
                  "font-bold": isActive,
                })
              }
            >
              Atrazioni
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
