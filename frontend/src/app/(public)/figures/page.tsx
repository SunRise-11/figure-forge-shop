'use client'
import React, { useEffect } from "react";
import Banner from "@/app/components/public/Banner";
import Catalog from "@/app/components/public/Catalog";
import ShopImage from "../../../../public/shop-image.webp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSearchParams, useRouter} from "next/navigation";

const ShopPage = () => {

  const router = useRouter();

const searchParams = useSearchParams();

useEffect(() => {

  const submitted = searchParams.get('submitted')

  if (submitted) {
    toast.success('Figure submitted!');

      router.push('/figures');
  }
}, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <Banner name="OUR COLLECTION" imageSource={ShopImage.src} />
      <Catalog />
    </div>
  );
};

export default ShopPage;
