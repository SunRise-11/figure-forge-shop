"use client";
import Card from "@/app/components/admin/Card";
import { FiguresContext } from "@/app/contexts/figures.context";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { useContext } from "react";

const Dashboard = () => {
  // async function Profile() {
  //   const session = await getSession();
  //   if (!session || !session.user) {
  //     redirect("/");
  //   }
  //   const user = session!.user;

  const { toys } = useContext(FiguresContext);
  toys.forEach((toy) => console.log(toy));

  return (
    <div className=" relative">
      <div className=" absolute top-16 left-[19rem] flex flex-row gap-10">
        <Card title="Profit" />
        <Card title="Posted" />
        <Card title="Uncheck" />
      </div>
    </div>
  );
  // },
  // { returnTo: "/" }
};

export default Dashboard;
