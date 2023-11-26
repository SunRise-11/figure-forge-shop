import React from "react";

const page = () => {
  return (
    <div className="bg-background h-[calc(100vh-24rem)] pt-32">
      <div className=" p-4  md:mx-auto w-96 border-solid border-red-500 border-2 rounded-lg">
        <svg
          fill="#f44336"
          viewBox="0 0 32 32"
          className="text-green-500 w-20 h-20 mx-auto my-6"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>cancel</title>{" "}
            <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z"></path>{" "}
          </g>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-text font-semibold text-center">
            OH NO!
          </h3>
          <p className="text-text my-2">Something went wrong.</p>
          <p className="text-text">
            {" "}
            Please try again later and contact our team for assistance.
          </p>
          <div className="py-10 text-center">
            <a
              href="/figures"
              className="  inline-flex justify-center rounded-md border border-transparent bg-primary text-text px-4 py-2 text-sm font-medium hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Try Again
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
