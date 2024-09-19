import { auth } from "@/auth";
import PayButton from "./_components/PayButton";

const Home = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-4xl font-semibold">Hello Welcome to Twitly</h1>
      {session ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Welcome , {session?.user?.name}</p>
          <PayButton session={session} />
        </div>
      ) : (
        <p>Kindly Sign In to continue using the bookmark</p>
      )}
    </div>
  );
};

export default Home;
