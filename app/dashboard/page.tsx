
import AuthGuard from "@/components/auth/AuthGuard";
import { User } from "@/types/User";
import { cookies } from "next/headers";
import Dashboard from "./DashboardPage";

export default async function page() {
  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("userData")?.value;

  let user: User | undefined = undefined;
  if (userCookie) {
    try {
      user = JSON.parse(userCookie) as User;
    } catch (error) {
      console.error("Failed to parse userData cookie:", error);
    }
  }


  return (
    <AuthGuard>
      <Dashboard user={user}/>
    </AuthGuard>
  );
}
