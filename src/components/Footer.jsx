import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/Footer/logo1.png";
import footer from "../assets/Footer/foot.png";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/*first section*/}
          <div className="space-y-4 max-w-[300px]">
            <img src={logo} alt="" className="w-[150px]" />
            <p className="text-dark2">
              Blessings is focused on offering photocopying, bookbinding and
              lamination to the puclic at the fastest and highest degree but at
              the lowest possible prices
            </p>
          </div>
          {/*second section*/}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2 ">
                <ul className="space-y-2 text-lg ">
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Bookbinding
                  </li>
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Risograph
                  </li>
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Lamination
                  </li>
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Gold Stamping
                  </li>
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Digital Printing
                  </li>
                  <li className="cursor-pointer hover:text-secodary duration-200">
                    Other Services
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Links</h1>
                <div className="text-dark2 ">
                  <ul className="space-y-2 text-lg ">
                    <li className="cursor-pointer hover:text-secodary duration-200">
                      Home
                    </li>
                    <li className="cursor-pointer hover:text-secodary duration-200">
                      Services
                    </li>
                    <li className="cursor-pointer hover:text-secodary duration-200">
                      About Us
                    </li>
                    <li className="cursor-pointer hover:text-secodary duration-200">
                      Branches
                    </li>
                    <li className="cursor-pointer hover:text-secodary duration-200">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*third section*/}
          <div className="pace-y-4 max-w-[550px]">
            <img
              src={footer}
              alt=""
              className="h-[200px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
