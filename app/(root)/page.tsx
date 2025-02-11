// import { auth, signOut } from "@/auth";
import Link from "next/link";

import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import ROUTES from "@/constants/routes";

const Home = () => {
  return (
    <div className="px-8">
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;
