import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen sticky top-0 p-6 pl-0 min-w-[200px] ">
      <Logo />
    </div>
  );
};

export default Sidebar;
