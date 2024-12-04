// import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-8">
      <h1>Welcome to Leo's Exchange!</h1>
      <p>Your one-stop solution for trading, testimonials, FAQs, and more.</p>

      {/* Trade with Me button */}
      <Link href={ROUTES.SIGN_IN}>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Trade with Me
        </button>
      </Link>
    </div>
  );
};

export default Home;
