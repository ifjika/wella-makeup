import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Klien Puas", value: 300, suffix: "+" },
  { label: "Tahun Pengalaman", value: 4 },
  { label: "Edgament Project", value: 100, suffix: "+" },
  { label: "Rating", value: 4.9, suffix: "⭐" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // biar bisa trigger ulang
    margin: "-100px",
  });

  return (
    <section className="py-16 bg-pink-50 text-center" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-black font-brand text-primary mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trusted by Many, Loved by All
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md border-4 border-primary"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-4xl font-extrabold text-primary">
                {isInView ? (
                  <CountUp
                    end={item.value}
                    duration={2}
                    suffix={item.suffix || ""}
                    redraw={true}
                  />
                ) : (
                  "0" + (item.suffix || "")
                )}
              </div>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
