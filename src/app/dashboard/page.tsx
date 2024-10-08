"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashHeader from "./_components/dashHeader";
import UserGallery from "./_components/UserGallery";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/signup");
    }
  }, [session, router]);

  return (
    <div className="h-full w-full flex flex-col gap-10 items-start justify-start p-10">
      <DashHeader session={session} />
      <UserGallery />
    </div>
  );
};

export default Dashboard;
