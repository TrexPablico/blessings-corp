import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import hero from "../assets/Hero/hero1.jpg";
import hero2 from "../assets/Hero/hero2.jpg";
import hero3 from "../assets/Hero/hero3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              <span className="text-secodary">Quality </span>service for your
              work... <span className="text-secodary">Creativity </span>for your
              advantage...
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Our Services
                <FaArrowRight className="text-xl group-hover:translate-x-2 group-hover:rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Slider */}
        <Slider
          {...settings}
          className="w-full flex justify-center items-center overflow-hidden mt-[5px] md:mt-[190px] lg:mt-[160px]  lg:ml-1"
        >
          {[hero, hero2, hero3].map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <motion.img
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                src={image}
                alt=""
                className="w-[100%] max-w-[400px] xl:max-w-[600px] h-[250px] lg:h-[325px] object-cover rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
