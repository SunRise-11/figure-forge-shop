"use client";
<<<<<<< HEAD
import AllFigures from "@/app/components/admin/allfigures";
 import Card from "@/app/components/admin/Card";
import { FiguresContext } from "@/app/contexts/figures.context";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { useContext } from "react";
 
=======
import Card from "@/app/components/admin/Card";
import AllFigures from "@/app/components/admin/allfigures";
// import AllFigures from "@/app/components/admin/AllFigures";
>>>>>>> 72a82a6ba96e328fe51707d34aff77ea0071a0b6

const Dashboard = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-16 left-[19rem] flex flex-row gap-10">
        <Card title="Profit" />
        <Card title="Posted" />
        <Card title="Uncheck" />
      </div>
<<<<<<< HEAD
      <div className="w-3/4 absolute left-[19rem] top-60 flex flex-row gap-10 mt-10">
        <AllFigures />
       </div>
=======
      <div className="w-3/4 absolute left-[19rem] top-60 flex flex-row gap-10 mt-10"></div>
      <AllFigures />
>>>>>>> 72a82a6ba96e328fe51707d34aff77ea0071a0b6
    </div>
  );
};

export default Dashboard;
