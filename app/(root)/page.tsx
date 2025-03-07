// import { auth, signOut } from "@/auth";
// import Link from "next/link";

import AboutUs from "@/components/home/AboutUs";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
// import ROUTES from "@/constants/routes";

const Home = async () => {
  const result = await db.select().from(users);

  console.log(JSON.stringify(result, null, 2));
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
