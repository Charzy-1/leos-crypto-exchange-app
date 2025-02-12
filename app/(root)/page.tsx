// import { auth, signOut } from "@/auth";
// import Link from "next/link";

import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
// import ROUTES from "@/constants/routes";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Home;
