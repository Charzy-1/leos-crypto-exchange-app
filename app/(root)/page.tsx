// import { auth, signOut } from "@/auth";
// import Link from "next/link";

import AboutUs from "@/components/home/AboutUs";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
// import ROUTES from "@/constants/routes";

const Home = () => {
  return (
    <div className="mx-8">
      <Hero />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
