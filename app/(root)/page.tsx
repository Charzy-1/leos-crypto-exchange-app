import AboutUs from "@/components/home/AboutUs";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <div className="mx-8">
        <Hero />
        <AboutUs />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
