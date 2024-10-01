import CreateBar from "@/components/SearchBar";

const App = () => {
  return (
    <div className="p-10 ">
      <CreateBar placeholder="Log in to start creating.." disabled={false} />
    </div>
  );
};

export default App;
