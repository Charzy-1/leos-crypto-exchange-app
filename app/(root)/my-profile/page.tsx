import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import React from "react";

const Profile = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mb-10"
      >
        <Button>Sign Out</Button>
      </form>
    </>
  );
};

export default Profile;
