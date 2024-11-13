import React from "react";
import logo from "../assets/Banner/bless.png";
import { motion } from "framer-motion";

import { FiMapPin } from "react-icons/fi";
import { FadeUp } from "./Hero";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:spac-y-0">
        {/* banner image */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        {/* banner text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              We are dedicated to bring fine{" "}
              <span className="text-secodary">binding</span>,{" "}
              <span className="text-secodary">restoration</span> and{" "}
              <span className="text-secodary">repair</span> to everyone at
              affordable prices.
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FiMapPin className="text-2xl" />
                <p className="text-lg">___ Branches Nationwide</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FiMapPin className="text-2xl" />
                <p className="text-lg">___ Branches Nationwide</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FiMapPin className="text-2xl" />
                <p className="text-lg">___ Branches Nationwide</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
