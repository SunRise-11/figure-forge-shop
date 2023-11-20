import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default withPageAuthRequired(
  async function Profile() {
    const session = await getSession();
    if (!session || !session.user) {
      redirect("/admin");
    }
    const user = session!.user;

    return (
      <>
        <div>Hello {user.name}</div>
        <h2>Email : {user.email}</h2>
        <h2>Rolesa : {user.roles}</h2>
        <a href="/api/auth/logout">Logout</a>
      </>
    );
  },
  { returnTo: "/admin" }
);
