import Gallery from "@/components/Gallery";
import CreateBar from "@/components/CreateBar";
import Sidebar from "@/components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col gap-10 items-center relative ">
        <div className="md:sticky md:top-0 fixed bottom-0  z-[20] flex items-center justify-center w-full  md:pt-4 pb-8 bg-gradient-to-t md:bg-gradient-to-b from-white ">
          <CreateBar
            placeholder="Log in to start creating..."
            disabled={false}
          />
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default App;
