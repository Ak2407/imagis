import Logo from "@/components/Logo";

export default async function Dashboard() {
  return (
    <div className="w-[90%] flex flex-col h-full gap-4 justify-center ">
      <Logo noText noLink />
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-xl font-medium">Welcome to Template</h1>
        <p className="text-sm text-gray-500">
          This is a template for your own dashboard.
        </p>
      </div>
    </div>
  );
}
