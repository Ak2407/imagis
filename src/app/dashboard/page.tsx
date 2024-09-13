import { auth } from "@/auth";
import Logo from "@/components/Logo";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signup");
  }

  return (
    <div>
      <Logo />
    </div>
  );
}
