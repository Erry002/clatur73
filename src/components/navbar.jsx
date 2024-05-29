// Suggested code may be subject to a license. Learn more: ~LicenseLog:166749758.
jsx
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const Navbar = () =>
 {
  return (
    <nav className="bg-whit shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
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
          </div>
          {/* Aggiungi altri link di navigazione qui */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
