"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

const AdminPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    console.log(user);
    redirect("/admin/dashboard");
  }

  return (
    <main className="w-screen h-screen bg-background flex items-center justify-center">
      <Link href="/api/auth/login">
        <p className="lg:inline-flex lg:w-auto lg:text-2xl lg:py-4 lg:px-6 w-full px-3 py-2 rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
          Login
        </p>
      </Link>
    </main>
  );
};

export default AdminPage;
