import Gallery from "@/components/Gallery";
import CreateBar from "@/components/CreateBar";

const App = () => {
  return (
    <div className="flex flex-col gap-10 items-center relative ">
      <div className="md:sticky md:top-0 fixed bottom-0 z-[20] flex items-center justify-center w-full  md:pt-4 pb-8 bg-gradient-to-t md:bg-gradient-to-b from-white ">
        <CreateBar />
      </div>
      <Gallery />
    </div>
  );
};

export default App;
