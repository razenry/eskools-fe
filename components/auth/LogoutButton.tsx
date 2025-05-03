
"use client";
import { handleLogout } from "@/actions/Auth";
import * as React from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      {isLoading ? "Logout..." : "Logout"}
    </button>
  );
}