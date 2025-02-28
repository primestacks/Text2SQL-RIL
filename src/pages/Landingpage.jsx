import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurGrowth from "../components/OurGrowth";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";
import HeroHome from "../components/Herohome";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <OurGrowth />
      <HowItWorks />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Landingpage;
