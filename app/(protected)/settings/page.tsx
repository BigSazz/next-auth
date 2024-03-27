import { auth, signOut } from "@/auth";
const SettingPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Settings Page</h1>
      <p>Here!!! {JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingPage;
