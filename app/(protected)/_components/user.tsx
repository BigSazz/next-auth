"use client";
import { useCurrentUser } from "@/hooks/use-current-user";

export const UserGreeting = () => {
  const user = useCurrentUser();

  if (!user || !user?.name) return null;

  const firstName = user?.name.split(" ")[0];

  return (
    <div className="max-w-[600px] mx-auto w-full items-start bg-secondary p-4 rounded-xl">
      <h1 className="text-2xl font-semibold">Hello, {firstName} 🙂</h1>
    </div>
  );
};
