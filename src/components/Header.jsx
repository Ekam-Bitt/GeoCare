import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import offer from "../assets/offer.png";
import logo from "../assets/logo.png";
import { GoPerson } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiBasket } from "react-icons/pi";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("SIGN IN");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("PROFILE");
      } else {
        setPageState("SIGN IN");
      }
    });
  }, [auth]);
  function PathMatchRoute(route) {
    return route === location.pathname;
  }
  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-40">
      <img src={offer} alt="offer" width="100%" />
      <div className=" h-24 flex items-center justify-between px-12">
        <ul className="flex justify-center gap-4 w-72">
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/shop")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
          >
            <Link
              to="shop"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              SHOP
            </Link>
          </li>
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/articles")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/articles")}
          >
            ARTICLES
          </li>
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/faq")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/faq")}
          >
            FAQ
          </li>
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/contact-us")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/contact-us")}
          >
            CONTACT US
          </li>
        </ul>
        <img
          src={logo}
          alt="logo"
          width={200}
          onClick={() => navigate("/")}
          className="cursor-pointer "
        />
        <ul className="flex justify-center gap-8 w-72">
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/Sign-In") || PathMatchRoute("/Profile")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/Profile")}
          >
            <GoPerson className=" text-2xl" />
          </li>
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/search")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/search")}
          >
            <IoIosSearch className=" text-2xl" />
          </li>
          <li
            className={`py-3 cursor-pointer text-sm font-semibold ${
              PathMatchRoute("/basket")
                ? "text-black border-b-red-600"
                : "text-gray-500 border-b-transparent"
            }`}
            onClick={() => navigate("/basket")}
          >
            <PiBasket className=" text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
}
