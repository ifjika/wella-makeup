import React from "react";
import { motion } from "framer-motion";

const servicesItems = [
  {
    title: "Paket Silver",
    price: "Rp 1.000.000",
    description:
      "Makeup Akad + Softlens. Tampil cantik dan elegan untuk hari istimewa Anda.",
  },
  {
    title: "Makeup Reguler",
    price: "Mulai Rp 200.000",
    description:
      "Graduation, Party, Bridesmaid, Photoshoot dan lainnya. Harga terjangkau, hasil maksimal.",
  },
  {
    title: "Makeup Engagement / Martupol",
    price: "Rp 300.000",
    description:
      "Untuk hari lamaran atau acara adat. Makeup spesial tanpa harus boros.",
  },
];

const Services = () => {
  return (
    <section className="text-center py-16 px-4 cursor-default">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-primary mb-4 font-brand">
          Affordable Beauty, Unforgettable You
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-8 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {servicesItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[300px] md:w-[340px] min-h-[360px] border-4 border-primary rounded-xl p-6 text-center shadow-lg flex flex-col justify-between bg-white"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.1,
                zIndex: 20,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <h3 className="text-xl font-bold text-primary mb-1">
                {item.title}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {item.price}
              </p>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-pink-600 transition duration-300">
          Check Price List
        </button>
      </div>
    </section>
  );
};

export default Services;
