import Logo from "@/components/Logo";
import MobileSidebar from "@/components/MobileSidebar";

const DashNav = () => {
  return (
    <div className="lg:hidden sticky  top-2 left-2 z-50 w-full flex flex-row items-center justify-between">
      <MobileSidebar />
      <Logo footer />
    </div>
  );
};

export default DashNav;
