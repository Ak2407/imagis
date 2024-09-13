import Sidebar from "@/components/Sidebar";
import DashNav from "./_components/DashNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between h-screen w-screen bg-[#f6f6f6] p-4 gap-4   ">
      <div className="bg-white h-full overflow-y-scroll  rounded-[25px] py-6 px-4  border-[2px] border-gray-100 hidden lg:block min-w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-col items-center flex-1 overflow-y-scroll bg-white p-8  w-full h-full rounded-[22px] border-[2px] border-gray-100 flex justify-center relative">
        <DashNav />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
