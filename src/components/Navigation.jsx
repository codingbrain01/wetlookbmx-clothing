import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Navigation() {
  const location = useLocation();
  const underlineRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (
      !underlineRef.current ||
      !homeRef.current ||
      !aboutRef.current ||
      !galleryRef.current
    )
      return;

    const homeRect = homeRef.current.getBoundingClientRect();
    const aboutRect = aboutRef.current.getBoundingClientRect();
    const galleryRect = galleryRef.current.getBoundingClientRect();
    const underline = underlineRef.current;
    const parentRect = homeRef.current.parentElement.getBoundingClientRect();

    if (location.pathname === "/") {
      underline.style.left = `${homeRect.left - parentRect.left}px`;
      underline.style.width = `${homeRect.width}px`;
    } else if (location.pathname === "/about") {
      underline.style.left = `${aboutRect.left - parentRect.left}px`;
      underline.style.width = `${aboutRect.width}px`;
    } else if (location.pathname === "/gallery") {
      underline.style.left = `${galleryRect.left - parentRect.left}px`;
      underline.style.width = `${galleryRect.width}px`;
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-6 moving-gradient text-white relative shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
        <a
          href="/"
          className="text-3xl md:text-4xl font-bold font-sans text-white hover:text-gray-300 transition duration-300"
        >
          <span className="border-2 border-white rounded-md overflow-hidden flex relative">
            <span className="bg-green-500 text-white px-1 border-r-2 border-black">
              Wet
            </span>
            <span className="bg-black text-white px-1">Look</span>
            <span className="absolute inset-0 border-2 border-black rounded-md pointer-events-none"></span>
          </span>
        </a>
        <ul className="flex items-center space-x-6 relative">
          <li ref={homeRef} className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl font-sans text-white"
                  : "text-lg md:text-xl font-sans hover:text-gray-300 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li ref={aboutRef} className="relative">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl bebas-neue text-white"
                  : "text-lg md:text-xl bebas-neue hover:text-gray-300 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li ref={galleryRef} className="relative">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl bebas-neue text-white"
                  : "text-lg md:text-xl bebas-neue hover:text-gray-300 transition duration-300"
              }
            >
              Gallery
            </NavLink>
          </li>
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 bg-white transition-all duration-300"
          ></div>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
