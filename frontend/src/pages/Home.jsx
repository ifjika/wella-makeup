import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio";
import Reason from "../components/Home/Reason";
import Services from "../components/Home/Services";
import Testimoni from "../components/Home/Testimoni";
import Achievements from "../components/Home/Achievements";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-200">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Why Me */}
      <Reason />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimoni */}
      <Testimoni />

      {/* Services */}
      <Services />

      {/* Achievements */}
      <Achievements />

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
