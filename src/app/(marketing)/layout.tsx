import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center gap-10 pt-4 pb-0 ">
      <div className="flex flex-col gap-10 justify-center items-center w-full">
        <Navbar />

        <div className="max-w-[1300px] mx-auto">{children}</div>
      </div>

      <Footer />
      {/* <div className="fixed inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none " /> */}
    </div>
  );
};

export default MarketingLayout;
