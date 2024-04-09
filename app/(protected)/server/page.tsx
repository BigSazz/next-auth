import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <>
      <UserInfo label={"💻 Server User Info"} user={user} />
    </>
  );
};

export default ServerPage;
