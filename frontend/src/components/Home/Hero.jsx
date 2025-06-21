import React from "react";

const Hero = () => {
  return (
    <section className="text-center mt-20 py-20 px-4 cursor-default">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-8xl md:text-5xl text-primary mb-4 leading-tight font-brand font-black">
          For Your Beautiful Moments
        </h1>
        <div className="h-1 w-96 bg-primary mx-auto mb-6 rounded-full" />

        <p className="text-6xl md:text-3xl font-brand font-black text-primary mb-4">
          Makeup bukan hanya tampilan, tapi pernyataan.
        </p>
        <p className="text-6xl md:text-3xl font-brand font-black text-primary mb-6">
          Tampil stunning dan percaya diri dengan sentuhan MUA profesional
          bersertifikat.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-pink-600 transition duration-300">
          Booking Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
