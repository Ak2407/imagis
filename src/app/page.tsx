import Gallery from "@/components/Gallery";
import CreateBar from "@/components/CreateBar";

const App = () => {
  return (
    <div className="flex flex-col gap-10 items-center relative pb-40 sm:pb-0 ">
      <div className="sticky top-0  flex items-center justify-center w-full pt-4 pb-8 z-20  bg-gradient-to-b from-white ">
        <CreateBar isButton={true} />
      </div>
      <h1 className="text-2xl text-stone-800 text-center">
        Some creations done on our application 💫
      </h1>
      <Gallery />
    </div>
  );
};

export default App;
