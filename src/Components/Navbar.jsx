import React, { useEffect, useState } from "react";
import { assets } from "../Food Del Frontend Assets/assets/assets";
import { Link, NavLink } from "react-router-dom";
import LoginPopUp from "./LoginPopUp";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../utils/CategorySlice";

const Navbar = () => {
  const show = useSelector((state) => state.categorySlice.showLogin);
  const dispatch = useDispatch();
  const productAdded = useSelector((state) => state.categorySlice.productAdded);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (productAdded) {
      const calculatedTotal = productAdded.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setTotal(calculatedTotal);
    } else {
      setTotal(0);
    }
  }, [productAdded]);

  console.log(total);
  return (
    <>
      {show ? (
        <div>
          <LoginPopUp />
        </div>
      ) : (
        <></>
      )}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            className="h-16 md:h-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bolt_Food_logo.png/799px-Bolt_Food_logo.png?20230209130621"
            alt="Food_logo"
          />
          <div className="hidden md:flex gap-8 items-center text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 cursor-pointer"
                  : "text-black cursor-pointer"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/food-menu"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 cursor-pointer"
                  : "text-black cursor-pointer"
              }
            >
              Menu
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 cursor-pointer"
                  : "text-black cursor-pointer"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex gap-6 items-center">
            <img
              className="h-7 cursor-pointer"
              src={assets.search_icon}
              alt="Search"
            />
            <div className="relative">
              <Link to="/cart">
                <img
                  className="h-7 cursor-pointer"
                  src={assets.basket_icon}
                  alt="Basket"
                />
              </Link>
              {total > 0 ? (
                <div className="absolute min-w-[10px] min-h-[10px] text-green-500 font-bold  top-[-8px] right-[-8px]">
                  {total}
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              onClick={() => dispatch(setLogin())}
              className="h-10 rounded-lg shadow-lg bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 border border-blue-700 text-md font-bold"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="md:hidden flex justify-around py-4 bg-gray-100 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 cursor-pointer"
                : "text-black cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 cursor-pointer"
                : "text-black cursor-pointer"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 cursor-pointer"
                : "text-black cursor-pointer"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
