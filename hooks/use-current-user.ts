import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();

  if (!session || !session.data || !session.data?.user) return null;

  return session.data?.user;
};
