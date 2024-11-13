import React from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/Navbar/logo1.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    path: "/",
  },
  {
    id: 4,
    title: "Branches",
    path: "/",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center px-9">
        {/*logo section*/}
        <div>
          <img src={logo} alt="" className="w-[200px] lg:w-[350px]" />
        </div>
        {/*menu section*/}
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secodary relative group"
                >
                  <div className="w-2 h-2 bg-secodary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Branches</button>
          </ul>
        </div>
        {/*mobile section*/}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
