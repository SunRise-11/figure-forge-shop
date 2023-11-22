import React from "react";
import Link from "next/link";

const AdminPage = () => {
  return (
    <main className="w-screen h-screen bg-background flex items-center justify-center">
      <Link href="/api/auth/login">
        <p className="lg:inline-flex lg:w-auto lg:text-2xl lg:py-4 lg:px-6 w-full px-3 py-2 rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
          Login
        </p>
      </Link>
      <Link href="/admin/dashboard/figures">
        <p className="lg:inline-flex lg:w-auto lg:text-2xl lg:py-4 lg:px-6 w-full px-3 py-2 rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
          Figures
        </p>
      </Link>
    </main>
  );
};

export default AdminPage;
