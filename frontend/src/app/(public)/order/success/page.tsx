import React from "react";

const page = () => {
  return (
    <div className="bg-background h-[calc(100vh-24rem)] pt-32">
      <div className=" p-4  md:mx-auto w-96 border-solid border-green-500 border-2 rounded-lg">
        <svg
          viewBox="0 0 24 24"
          className="text-green-500 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-text font-semibold text-center">
            Payment Successful!
          </h3>
          <p className="text-text my-2">
            Thank you! Your payment has been received.
          </p>
          <p className="text-text">
            {" "}
            You will recieve a confirmation email shortly.{" "}
          </p>
          <div className="py-10 text-center">
            <a
              href="/"
              className="  inline-flex justify-center rounded-md border border-transparent bg-primary text-text px-4 py-2 text-sm font-medium hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
