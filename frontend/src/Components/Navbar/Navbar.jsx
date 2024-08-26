import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartItems, token, setToken } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".burger-icon")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="header container flex items-center justify-between bg-white shadow-md">
        <Link className="text-center" to="/">
          <img src="/logo4.png" alt="Logo" className="h-12" />
          <h3 className="text-xl">SWIFTPICK</h3>
        </Link>

        <nav className="navbar hidden md:flex">
          <ul className="flex space-x-12">
            <li onClick={() => setMenu("shop")}>
              <Link
                to="/"
                className="font-normal text-gray-700 hover:text-gray-900"
              >
                Shop
              </Link>
              {menu === "shop" && <span></span>}
            </li>
            <li onClick={() => setMenu("about")}>
              <Link
                to="/about"
                className="font-normal text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              {menu === "about" && <span></span>}
            </li>
            <li onClick={() => setMenu("contact")}>
              <Link
                to="/contact"
                className="font-normal text-gray-700 hover:text-gray-900"
              >
                Contact us
              </Link>
              {menu === "contact" && <span></span>}
            </li>
          </ul>
        </nav>

        <div className="icons flex space-x-4">
          {/* <CartIcon /> */}
          <Link to="/cart" className="relative">
            <i className="ri-shopping-cart-line text-gray-700 hover:text-gray-900"></i>
            <span
              id="iconCartSpan"
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1"
            >
              {getTotalCartItems()}
            </span>
          </Link>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="rounded-md medium-15 px-7 py-2"
            >
              Login
            </button>
          ) : (
            <div className="group relative cursor-pointer">
              <i className="fa-regular fa-circle-user text-gray-700 hover:text-gray-900"></i>
              <ul className="popup bg-slate-50 shadow-sm p-5 w-32 ring-1 ring-slate-300/15 rounded-sm group-hover:flex flex-col hidden">
                <li
                  onClick={() => navigate("/MyOrders")}
                  className="flex items-center justify-center gap-x-2 cursor-pointer"
                >
                  <p className="text-2xl font-normal">Orders</p>
                </li>
                {/* <hr className="my-2 bg-slate-50" /> */}
                <li
                  onClick={logout}
                  className="flex items-center justify-center gap-x-2 cursor-pointer mt-4"
                >
                  <p className="text-2xl font-normal">Logout</p>
                </li>
              </ul>
            </div>
          )}

          <div
            className="burger-icon md:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <i className="ri-menu-3-line text-gray-700 hover:text-gray-900"></i>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="close-icon cursor-pointer" onClick={toggleMobileMenu}>
          <i className="fas fa-times text-4xl"></i>
        </div>
        <ul className="flex flex-col space-y-6 mt-8">
          <li onClick={() => setMenu("shop")}>
            <Link
              to="/"
              className="font-normal text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
          </li>
          <li onClick={() => setMenu("about")}>
            <Link
              to="/about"
              className="font-normal text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li onClick={() => setMenu("contact")}>
            <Link
              to="/contact"
              className="font-normal text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="font-normal text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
