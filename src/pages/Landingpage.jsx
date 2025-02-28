import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurGrowth from "../components/OurGrowth";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";
import Hero_home from "../components/Hero_home";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <Hero_home />
      <OurGrowth />
      <HowItWorks />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Landingpage;
