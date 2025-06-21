import { motion } from "framer-motion";

const notes = [
  "Booking = DP",
  "Pembatalan sepihak setelah DP = Hangus",
  '"Hanya Makeup — tidak termasuk Henna, Melati, Hairdo, Pemasangan Baju dan Attire"',
  "Pelunasan wajib di Hari H (Cash / Transfer)",
  "Lokasi lebih dari 15 menit dikenakan biaya transport",
  "Penambahan makeup keluarga dikenakan biaya Reguler",
];

const BookingNotes = () => {
  return (
    <section className="bg-white py-16 px-6 border-t border-primary">
      <div className="max-w-4xl mx-auto text-left">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center font-brand"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Booking Terms & Notes
        </motion.h2>

        <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
          {notes.map((note, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {note}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookingNotes;
