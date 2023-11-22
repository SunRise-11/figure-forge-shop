"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useUser();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-background p-3 ">
      <Link href="/">
        <p className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl text-text font-bold uppercase tracking-wide">
            Figure Forge
          </span>
        </p>
      </Link>
      <button
        className=" inline-flex p-3 rounded lg:hidden text-text ml-auto hover:text-white outline-none hover:bg-primary"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto gap-4">
          <Link href="/" onClick={handleClick}>
            <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-purple active:text-primary">
              Home
            </p>
          </Link>
          <Link href="/figures" onClick={handleClick}>
            <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-metal font-bold items-center justify-center hover:text-purple">
              Shop
            </p>
          </Link>
          <Link href="/about" onClick={handleClick}>
            <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-metal font-bold items-center justify-center hover:text-purple">
              About us
            </p>
          </Link>
          {user && user.role == "admin" ? (
            <Link href="/dashboard" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-metal font-bold items-center justify-center hover:text-purple">
                Dashboard
              </p>
            </Link>
          ) : user && user.role == "seller" ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-metal font-bold items-center justify-center hover:text-purple">
                Sell Figure
              </p>
            </Link>
          ) : (
            <div></div>
          )}
          {user && user.role == "admin" ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-metal font-bold items-center justify-center hover:text-purple">
                Sell Figure
              </p>
            </Link>
          ) : (
            <div></div>
          )}
          {user ? (
            <Link href="/api/auth/logout" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
                Logout
              </p>
            </Link>
          ) : (
            <Link href="/api/auth/login" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-primary font-bold items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
                Login
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
