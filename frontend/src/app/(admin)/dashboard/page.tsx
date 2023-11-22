"use client";
import Card from "@/app/components/admin/Card";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default withPageAuthRequired(
  async function Profile() {
    const session = await getSession();
    if (!session || !session.user) {
      redirect("/");
    }
    const user = session!.user;

    return (
      <div className=" relative">
        <div className=" absolute top-16 left-[19rem] flex flex-row gap-10">
          <Card title="Profit" />
          <Card title="Posted" />
          <Card title="Uncheck" />
        </div>
      </div>
    );
  },
  { returnTo: "/" }
);
