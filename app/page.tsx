"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 p-4 text-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Selamat Datang di <span className="text-blue-600">Eskools</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Platform manajemen kegiatan ekstrakurikuler sekolah yang modern dan
          mudah digunakan.
        </p>
        <Link href="/login">
          <Button className="text-lg px-6 py-3">Login</Button>
        </Link>
      </div>
    </main>
  );
}
