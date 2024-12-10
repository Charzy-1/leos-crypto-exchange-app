// import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <div className="px-8">
      <Hero />
    </div>
  );
};

export default Home;
