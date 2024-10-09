import Gallery from "@/components/Gallery";
import CreateBar from "@/components/CreateBar";

const App = () => {
  return (
    <div className="flex flex-col gap-10 items-center relative pb-40 sm:pb-0 ">
      <div className="sm:sticky sm:top-0 fixed bottom-12 z-[20] flex items-center justify-center w-full  sm:pt-4 pb-8  sm:bg-gradient-to-b from-white ">
        <CreateBar />
      </div>
      <Gallery />
    </div>
  );
};

export default App;
