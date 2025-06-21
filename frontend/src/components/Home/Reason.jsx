import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/reason-1.jpg";
import img2 from "../../assets/reason-2.jpg";
import img3 from "../../assets/reason-3.jpg";
import { WiStars } from "react-icons/wi";
import { GiLipstick } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";

const Reason = () => {
  const reasons = [
    {
      icon: <WiStars />,
      title: "For Your Beautiful Moments",
      description:
        "Setiap momen spesial Anda akan terlihat sangat memukau dengan sentuhan make-up profesional.",
      image: img1,
    },
    {
      icon: <GiLipstick />,
      title: "Makeup Wedding & All Event",
      description:
        "Dari akad nikah hingga pesta, siap menemani setiap event penting Anda.",
      image: img2,
    },
    {
      icon: <TbCertificate />,
      title: "MUA Certified",
      description:
        "Berpengalaman dan tersertifikasi untuk hasil make-up yang aman dan tahan lama.",
      image: img3,
    },
  ];

  return (
    <section className="py-16 px-4 cursor-default">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-8xl md:text-5xl font-black font-brand text-primary mb-4">
          Why Wella Makeup ?
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-12 rounded-full" />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary transform -translate-x-1/2" />

          <div className="space-y-20">
            {reasons.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Text Section */}
                  <div
                    className={`md:w-5/12 px-4 md:px-10 text-justify md:text-${
                      isEven ? "right" : "left"
                    } mb-6 md:mb-0`}
                  >
                    <h3 className="text-4xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-drak text-2xl mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Centered Icon */}
                  <div className="md:w-2/12 flex justify-center relative z-10">
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 ${
                        isEven
                          ? "translate-x-1 -translate-y-10"
                          : "-translate-x-20 -translate-y-10"
                      }`}
                    >
                      <span className="text-primary text-7xl">{item.icon}</span>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`md:w-5/12 px-4 md:px-10 mt-6 md:mt-0 ${
                      isEven ? "md:mr-16" : "md:ml-16"
                    }`}
                  >
                    <div className="rounded-lg overflow-hidden shadow-md border-2 border-primary">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full transition-transform duration-1000 hover:scale-110"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
