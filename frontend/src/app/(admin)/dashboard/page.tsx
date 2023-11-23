"use client";

import Card from "@/app/components/admin/Card";
import AllFiguresComponent from "@/app/components/admin/allfigures";

const Dashboard = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-16 right-0 flex flex-row gap-10 w-full max-w-[calc(100vw-19rem)]">
        <Card title="Profit" />
        <Card title="Posted" />
        <Card title="Uncheck" />
      </div>
      <div className="w-3/4 absolute left-[19rem] top-60 flex flex-row gap-10 mt-10"></div>
      <AllFiguresComponent />
    </div>
  );
};

export default Dashboard;
