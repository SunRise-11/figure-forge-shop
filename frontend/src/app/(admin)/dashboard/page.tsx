"use client";
import Card from "@/app/components/admin/Card";
import { FiguresContext } from "@/app/contexts/figures.context";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { useContext } from "react";

const Dashboard = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-16 left-[19rem] flex flex-row gap-10">
        <Card title="Profit" />
        <Card title="Posted" />
        <Card title="Uncheck" />
      </div>
    </div>
  );
};

export default Dashboard;
