"use client";
import { CardForm } from "@/components/cardForm/cardForm";
import { CheckLogin } from "@/components/auth/AuthGuard";

export default function LoginPage() {
  return (
    <CheckLogin>
      <div className="flex h-screen w-screen items-center justify-center">
        <CardForm />
      </div>
    </CheckLogin>
  );
}
