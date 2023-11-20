import React from "react";
import Image from "next/image";
import Banner from "@/app/components/public/Banner";
import Catalog from "@/app/components/public/Catalog";


const ShopPage = () => {
  return (
    
    <div className="flex flex-col items-center justify-center">
      <Banner name="OUR COLLECTION" imageSource="https://daweebstop.com/cdn/shop/files/IMG_0171_c8d72572-d4b5-42b3-a240-b9bc2cc2aca9.jpg?v=1661460103" />
      <Catalog /> 
    </div>
  );
};

export default ShopPage;
