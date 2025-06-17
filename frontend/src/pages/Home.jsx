import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Belajar Kripto Dengan Cara Mudah
          </h2>
          <p className="text-lg mb-8">
            Akses ratusan materi dan kursus seputar dunia kripto, DeFi, dan
            Web3.
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Mulai Belajar
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Fitur Unggulan
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Kursus Interaktif
              </h4>
              <p className="text-gray-600">
                Nikmati modul yang interaktif dan mudah dipahami untuk semua
                level.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Komunitas Aktif
              </h4>
              <p className="text-gray-600">
                Bergabung dengan komunitas belajar dan diskusi kripto terbesar.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Update Rutin
              </h4>
              <p className="text-gray-600">
                Materi diperbarui secara berkala sesuai perkembangan industri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
