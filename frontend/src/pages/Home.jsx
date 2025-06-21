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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
