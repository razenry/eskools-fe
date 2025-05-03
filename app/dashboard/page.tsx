import AuthGuard from "@/components/auth/AuthGuard";
import LogoutButton from "@/components/auth/LogoutButton";
import { User } from "@/types/User";
import { cookies } from "next/headers";

export default async function page() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("authToken")?.value;
  const userCookie = (await cookieStore).get("userData")?.value;

  let user: User | undefined = undefined;
  if (userCookie) {
    try {
      user = JSON.parse(userCookie) as User;
    } catch (error) {
      console.error("Failed to parse userData cookie:", error);
    }
  }

  // console.log("Token from server-side:", token);
  // console.log("User from server-side:", user);

  return (
    <AuthGuard>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {user && (
          <div className="text-center">
            <p className="text-lg">
              Welcome,{" "}
              <span className="font-semibold">{user.data.data.name}</span>
            </p>
            <p className="text-sm text-gray-500">{user.data.data.email}</p>
          </div>
        )}
        <LogoutButton />
      </div>
    </AuthGuard>
  );
}
