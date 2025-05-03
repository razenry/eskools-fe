"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken } from "@/actions/Auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}

export function CheckLogin({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return <>{children}</>;
}
