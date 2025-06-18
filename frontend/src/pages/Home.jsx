import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-200 font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white text-pinklight py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Makeup Cantik
          </h2>
          <p className="text-lg  mb-8">Abadikan momen cantik mu</p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Book Now
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
                Makeup A
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum provident maiores, aliquam repellat culpa beatae ab
                rerum minima sit cupiditate, ad tempore, fugiat ullam error
                accusamus id nam assumenda quasi!
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Makeup B
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                accusamus fugit libero laborum ab deleniti illo dolore
                dignissimos. Facere corrupti vero labore! Velit aliquam sequi
                odit iste tempore vitae! Unde?
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Makeup C
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores fugiat voluptates, consequuntur harum aspernatur,
                repellendus alias facere vero iste accusantium voluptate hic
                dolor ipsa molestias beatae dolorum suscipit? Tenetur, rem.
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
