import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center gap-10 p-6 ">
      <div className="flex flex-col gap-10 justify-center items-center w-full">
        <Navbar />

        <div className="max-w-[1300px] mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
