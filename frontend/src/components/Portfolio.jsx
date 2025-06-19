import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/portfolio-1.jpg";
import img2 from "../assets/portfolio-2.jpg";
import img3 from "../assets/portfolio-3.jpg";

const portofolioItems = [{ path: img1 }, { path: img2 }, { path: img3 }];

const Portfolio = () => {
  return (
    <section className="text-center py-16 px-4 cursor-default">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-primary mb-4 font-brand">
          Portofolio Wella MUA
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-4 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6">
          {portofolioItems.map((items, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-md border-2 border-primary"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={items.path}
                alt={`Client ${index + 1}`}
                className="w-full h-[500px] object-cover object-top transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
