"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ServerPage = () => {
  const user = useCurrentUser();

  return (
    <>
      <UserInfo label={"💻 Client User Info"} user={user} />
    </>
  );
};

export default ServerPage;
