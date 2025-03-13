"use client";

import { signOut } from "next-auth/react"; // Import from NextAuth
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting immediately
    router.push("/sign-in"); // Manually redirect to "/sign-in"
  };

  return (
    <div className="relative">
      {/* Button positioned at the top-right corner */}
      <Button
        onClick={handleSignOut}
        className="absolute top-4 right-4" // Position the button to the top-right corner
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;
