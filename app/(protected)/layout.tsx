import { Navbar } from "@/app/(protected)/_components/navbar";
import { UserGreeting } from "@/app/(protected)/_components/user";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-400 to-red-800">
      <UserGreeting />
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
