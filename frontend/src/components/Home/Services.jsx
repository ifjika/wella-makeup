import { motion } from "framer-motion";
import logo from "../../assets/wella-makeup-logo.png";

const servicesItems = [
  {
    title: "Makeup Engagement",
    pricePrefix: "Hanya",
    priceValue: "Rp 300.000",
    description:
      "Elegan dan memukau di hari spesialmu—engagement atau Martupol tanpa khawatir budget.",
  },

  {
    title: "Makeup Reguler",
    pricePrefix: "Mulai",
    priceValue: "Rp 200.000",
    description:
      "Graduation, Party, Bridesmaid, Photoshoot dan lainnya. Harga terjangkau, hasil maksimal.",
  },
  {
    title: "Paket Silver",
    pricePrefix: "Hanya",
    priceValue: "Rp 1.000.000",
    description:
      "Makeup Akad + Softlens. Tampil cantik dan elegan untuk hari istimewa Anda dengan percaya diri.",
  },
];

const Services = () => {
  return (
    <section className="text-center py-16 px-4 cursor-default">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black font-brand text-primary mb-4">
          Affordable Beauty, Unforgettable You
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-8 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {servicesItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full sm:w-[300px] md:w-[340px] min-h-[360px] border-4 border-primary rounded-xl p-6 text-center shadow-lg flex flex-col justify-between"
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
              {/* Logo background */}
              <img
                src={logo}
                alt="logo background"
                className="absolute inset-0 m-auto w-120 opacity-10 pointer-events-none"
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-xl font-black text-primary mb-2">
                  {item.title}
                </h3>

                <p className="flex-grow flex flex-col items-center justify-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {item.pricePrefix}
                  </span>
                  <span className="text-4xl font-extrabold text-dark">
                    {item.priceValue}
                  </span>
                </p>

                <p className="font-bold text-dark text-sm">
                  {item.description}
                </p>
              </div>
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
