"use client";
import Card from "@/app/components/admin/Card";
import { FiguresContext } from "@/app/contexts/figures.context";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { useContext } from "react";
import AllFigures from "../../components/admin/allfigures";

const Dashboard = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-16 left-[19rem] flex flex-row gap-10">
        <Card title="Profit" />
        <Card title="Posted" />
        <Card title="Uncheck" />
      </div>
      <div className="w-3/4 absolute left-[19rem] top-60 flex flex-row gap-10 mt-10">
        <AllFigures />
      </div>
    </div>
  );
};

export default Dashboard;
