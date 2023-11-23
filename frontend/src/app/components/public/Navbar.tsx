"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-background lg:px-8">
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
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:relative lg:h-auto lg:top-0 lg:items-center w-full flex flex-col gap-4 fixed z-30 bg-background ">
          <Link href="/" onClick={handleClick}>
            <p
              className={`${
                pathname === "/" ? "text-primary" : ""
              } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
            >
              Home
            </p>
          </Link>
          <Link href="/figures" onClick={handleClick}>
            <p
              className={`${
                pathname === "/figures" ? "text-primary" : ""
              } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
            >
              Shop
            </p>
          </Link>
          <Link href="/about" onClick={handleClick}>
            <p
              className={`${
                pathname === "/about" ? "text-primary" : ""
              } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
            >
              About us
            </p>
          </Link>
          {user && user.role == "admin" ? (
            <Link href="/dashboard" onClick={handleClick}>
              <p
                className={`${
                  pathname == "/dashboard" ? "text-primary" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
              >
                Dashboard
              </p>
            </Link>
          ) : user && user.role == "seller" ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p
                className={`${
                  pathname == "/sell-figure" ? "text-primary" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
              >
                Sell Figure
              </p>
            </Link>
          ) : (
            <div></div>
          )}
          {user && user.role == "admin" ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p
                className={`${
                  pathname == "/sell-figure" ? "text-primary" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-primary`}
              >
                Sell Figure
              </p>
            </Link>
          ) : (
            <div className="hidden"></div>
          )}
          {user ? (
            <Link href="/api/auth/logout" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
                Logout
              </p>
            </Link>
          ) : (
            <Link href="/api/auth/login" onClick={handleClick}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-accent hover:transition-all">
                Login
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
