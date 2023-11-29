'use client';
import { useShoppingCart } from '@/app/contexts/cartContext';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [active, setActive] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center justify-between bg-background md:px-8 py-2 z-50 fixed w-full max-w-screen-2xl mx-auto">
      <Link href="/">
        <p className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl text-text font-bold uppercase tracking-wide">
            Figure Forge
          </span>
        </p>
      </Link>
      <div>
          <button className="md:hidden h-8 my-auto relative mr-4" onClick={openCart}>
            <ShoppingBagIcon className="h-8 text-text hover:text-secondary" />
            <div
              className=" rounded-full bg-red-600 d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(50%, -55%)',
              }}
            >
              {cartQuantity}
            </div>
          </button>
      <button
        className={`${active ? '' : ''
          } inline-flex p-3 rounded md:hidden text-text ml-auto hover:text-white outline-none hover:bg-primary`}
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
      </div>
      <div
        className={`${
          active ? '' : 'hidden'
        }   absolute md:relative md:top-0 top-14 w-full md:inline-flex md:flex-grow md:w-auto `}
      >
        <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto md:relative md:h-auto md:top-0 md:items-center w-full flex flex-col gap-4 fixed z-30 bg-background ">
          <Link href="/" onClick={handleClick}>
            <p
              className={`${
                pathname === '/' ? 'text-secondary' : ''
              } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
            >
              Home
            </p>
          </Link>
          <Link href="/figures" onClick={handleClick}>
            <p
              className={`${
                pathname === '/figures' ? 'text-secondary' : ''
              } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
            >
              Shop
            </p>
          </Link>
          <Link href="/about" onClick={handleClick}>
            <p
              className={`${
                pathname === '/about' ? 'text-secondary' : ''
              } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
            >
              About us
            </p>
          </Link>
          {user && user.role == 'admin' ? (
            <Link href="/dashboard" onClick={handleClick}>
              <p
                className={`${
                  pathname == '/dashboard' ? 'text-secondary' : ''
                } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
              >
                Dashboard
              </p>
            </Link>
          ) : user && user.role == 'seller' ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p
                className={`${
                  pathname == '/sell-figure' ? 'text-secondary' : ''
                } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
              >
                Sell Figure
              </p>
            </Link>
          ) : (
            <div></div>
          )}
          {user && user.role == 'admin' ? (
            <Link href="/sell-figure" onClick={handleClick}>
              <p
                className={`${
                  pathname == '/sell-figure' ? 'text-secondary' : ''
                } md:inline-flex md:w-auto w-full px-3 py-2 rounded text-text font-bold items-center justify-center hover:text-secondary`}
              >
                Sell Figure
              </p>
            </Link>
          ) : (
            <div className="hidden"></div>
          )}
          <button className="hidden md:block h-8 my-auto relative mr-4" onClick={openCart}>
            <ShoppingBagIcon className="h-8 text-text hover:text-secondary" />
            <div
              className="rounded-full bg-red-600 d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(50%, -55%)',
              }}
            >
              {cartQuantity}
            </div>
          </button>
          {user ? (
            <Link href="/api/auth/logout" onClick={handleClick}>
              <p className="md:inline-flex md:w-auto w-full px-2 py-1 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-text hover:bg-secondary hover:transition-all">
                Logout
              </p>
            </Link>
          ) : (
            <Link href="/api/auth/login" onClick={handleClick}>
              <p className="md:inline-flex md:w-auto w-full px-2 py-1 rounded text-text bg-primary font-bold text-center items-center justify-center transition ease-in-out delay-350 hover:text-text hover:bg-secondary hover:transition-all">
                Login
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
