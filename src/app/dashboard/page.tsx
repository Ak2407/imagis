// "use client";
//
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import DashHeader from "./_components/dashHeader";
// import UserGallery from "./_components/UserGallery";
//
// const Dashboard = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//
//   useEffect(() => {
//     if (!session) {
//       router.push("/auth/signup");
//     }
//   }, [session, router]);
//
//   return (
//     <div className="h-full w-full flex flex-col gap-10 items-start justify-start p-10">
//       <DashHeader session={session} />
//       <UserGallery />
//     </div>
//   );
// };
//
// export default Dashboard;

"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 100);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-700 via-pink-500 to-blue-500 animate-gradient-xy"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 animate-float">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 animate-pulse">
          This feature will be available shortly.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <div className="w-16 h-16 border-4 border-white rounded-full animate-spin"></div>
          <div className="text-white text-2xl font-bold">{count}%</div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  );
}
