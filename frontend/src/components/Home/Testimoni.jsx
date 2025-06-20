import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/testimoni-1.jpg";
import img2 from "../../assets/testimoni-2.jpg";
import img3 from "../../assets/testimoni-3.jpg";

const testimoniItems = [{ path: img1 }, { path: img2 }, { path: img3 }];

const Testimoni = () => {
  return (
    <section className="text-center py-16 px-4 cursor-default">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-8xl md:text-5xl font-black font-brand text-primary mb-4">
          What They Said ?
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-4 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6">
          {testimoniItems.map((items, index) => (
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

export default Testimoni;
