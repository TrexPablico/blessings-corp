import React from "react";
import about1 from "../assets/About/about1.jpg";

const About = () => {
  return (
    <div className="container w-11/12 animate-fadeIn my-24 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <img
          src={about1}
          alt=""
          className="w-full max-w-[800px] rounded-lg animate-fadeIn"
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <h3 className="text-4xl font-bold animate-fadeIn text-secodary mb-6">
          About Us
        </h3>
        <h2 className="text-3xl mt-2 mb-3 max-w-[400px] animate-fadeIn text-secodary">
          Mission
        </h2>
        <p className="mb-4 animate-fadeIn">
          Originally established at Stall No. 27 U.P Shopping Center inside U.P
          Diliman Campus in Quezon City in September 1995, to render
          photocopying and bookbinding services to students, professors, U.P.
          Diliman residents and other walk-in customers. Blessings has branched
          out to other Metro Manila sites such as Katipunan in Quezon City,
          Ateneo School of Theology, Ateneo Law School in Rockwell, DLSU Taft,
          FEU Library, SM Sta Mesa and many more.
        </p>
        <h2 className="text-secodary text-3xl mt-2 mb-3 max-w-[400px] animate-fadeIn">
          Vision
        </h2>
        <p className="mb-4 animate-fadeIn">
          The company was started as a single proprietorship by Ms. Imelda
          "Imee" N. Gines, a Batch '91 graduate of Far Eastern University w/ the
          degree of Bachelor of Science in Commerce, Major in Management.
          Initially assisted by only three photocopying operators, a binder and
          a cashier. Student's clamor for quality service at reasonable prices
          prompted her to put up other branches within the University Campus. At
          present there are a total of 11 stalls in NCR.
        </p>
      </div>
    </div>
  );
};

export default About;
