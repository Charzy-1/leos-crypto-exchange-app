"use client";

import { useEffect } from "react";

const UpdateActivity = ({ userId }: { userId?: string }) => {
  useEffect(() => {
    if (!userId) return;

    fetch("/api/update-activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
  }, [userId]);

  return null; // No UI needed
};

export default UpdateActivity;
